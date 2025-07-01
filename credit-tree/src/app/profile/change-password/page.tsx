"use server";

import Page from "./page.client";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import prisma from "@/app/prisma";
import validator from "validator";

export async function changePassword(prevData: any, formData: FormData) {
  const supabase = await createClient();

  async function verifyPassword(password: string): Promise<boolean> {
    const { data, error } = await supabase.rpc("verify_user_password", {
      input_plain_password: password,
    });

    console.log("verifyPassword data:", data);

    if (data.valid) {
      console.log("Password verification successful.");
      return true;
    } else {
      console.log("Password verification failed.");
      return false;
    }
  }

  let oldPasswordEntry = formData.get("old_password");
  let newPasswordEntry = formData.get("new_password");
  let confirmNewPasswordEntry = formData.get("confirm_new_password");
  let email = formData.get("email");

  oldPasswordEntry = oldPasswordEntry
    ? (oldPasswordEntry as string).trim()
    : "";
  newPasswordEntry = newPasswordEntry
    ? (newPasswordEntry as string).trim()
    : "";
  confirmNewPasswordEntry = confirmNewPasswordEntry
    ? (confirmNewPasswordEntry as string).trim()
    : "";
  email = email ? (email as string).trim() : "";

  const uuid = formData.get("uuid");

  console.log("oldPasswordEntry", oldPasswordEntry);
  console.log("newPasswordEntry", newPasswordEntry);
  console.log("confirmNewPasswordEntry", confirmNewPasswordEntry);
  console.log("uuid", uuid);

  let pattern = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );

  if (
    oldPasswordEntry === "" ||
    newPasswordEntry === "" ||
    confirmNewPasswordEntry === ""
  ) {
    return { message: "You can't have any empty fields." };
  }

  if (!validator.equals(newPasswordEntry, confirmNewPasswordEntry)) {
    return {
      message: "Your passwords don't match. Please retry.",
    };
  }

  if (validator.equals(oldPasswordEntry, newPasswordEntry)) {
    return {
      message: "Your new password can't be the same as your old password.",
    };
  }

  if (!validator.isLength(newPasswordEntry, { min: 8 })) {
    return {
      message: "Your password must be at least 8 characters long.",
    };
  }

  if (!pattern.test(newPasswordEntry)) {
    return {
      message:
        "Your password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    };
  }

  if (!(await verifyPassword(oldPasswordEntry))) {
    return {
      message: "Your old password is incorrect.",
    };
  }

  const { data, error } = await supabase.auth.updateUser({
    password: newPasswordEntry,
  });

  revalidatePath("/profile");
  redirect("/profile");
}

export default async function ChangePassword() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  // console.log("user", data.user);

  // console.log("pwd", user?.password);

  return <Page uuid={data.user?.id || ""} email={data.user?.email || ""} />;
}

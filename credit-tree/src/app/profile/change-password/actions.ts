"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import validator from "validator";
import { verifyPassword } from "@/utils/helpers";

export async function changePassword(prevData: any, formData: FormData) {
  const supabase = await createClient();

  let oldPasswordEntry = formData.get("old_password");
  let newPasswordEntry = formData.get("new_password");
  let confirmNewPasswordEntry = formData.get("confirm_new_password");

  oldPasswordEntry = oldPasswordEntry
    ? (oldPasswordEntry as string).trim()
    : "";
  newPasswordEntry = newPasswordEntry
    ? (newPasswordEntry as string).trim()
    : "";
  confirmNewPasswordEntry = confirmNewPasswordEntry
    ? (confirmNewPasswordEntry as string).trim()
    : "";

  const pattern = new RegExp(
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

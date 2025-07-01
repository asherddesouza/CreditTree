"use server";

import Page from "./page.client";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import validator from "validator";
import { verifyPassword } from "@/utils/helpers";

export async function deleteAccount(prevData: any, formData: FormData) {
  const supabase = await createClient();

  let confirmEntry = formData.get("confirm");
  let passwordEntry = formData.get("password");

  confirmEntry = confirmEntry ? (confirmEntry as string).trim() : "";
  passwordEntry = passwordEntry ? (passwordEntry as string).trim() : "";

  if (confirmEntry !== "CONFIRM") {
    return {
      message: "You must type CONFIRM to delete your account.",
    };
  }

  if (!(await verifyPassword(passwordEntry))) {
    return {
      message: "Your old password is incorrect.",
    };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase.auth.admin.deleteUser(user?.id || "");

  revalidatePath("/register");
  redirect("/register");

  return {
    message: "Successfully deleted your account.",
  };
}

export default async function DeleteAccount() {
  return <Page />;
}

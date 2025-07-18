"use server";

import Page from "./page.client";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import prisma from "../../../../libs/prisma";
import { revalidatePath } from "next/cache";
import validator from "validator";

export async function editUser(prevData: any, formData: FormData) {
  const supabase = await createClient();

  let uuid = formData.get("uuid");

  let currentEmail = formData.get("current_email");
  currentEmail = currentEmail ? (currentEmail as string).trim() : "";

  let newEmail = formData.get("new_email");
  newEmail = newEmail ? (newEmail as string).trim() : "";

  const newProfileImage = Number(formData.get("new_profile_image"));

  if (newEmail === "") {
    console.log("profile:", newProfileImage);

    await prisma.user_data.update({
      where: { id: uuid as string },
      data: { profile_image: newProfileImage },
    });

    revalidatePath("/profile");
    redirect("/profile");
  }

  if (currentEmail === newEmail) {
    return {
      message: "Your new email can't be the same as your current email.",
    };
  }

  if (!validator.isEmail(newEmail as string) && newEmail !== "") {
    return { message: "Error: Invalid email address." };
  }

  const { data: user, error } = await supabase.auth.admin.updateUserById(
    uuid as string,
    { email: newEmail }
  );

  await prisma.user_data.update({
    where: { id: uuid as string },
    data: { email: newEmail, profile_image: newProfileImage },
  });

  if (error) {
    return { message: `Error: ${error.message}` };
  }

  // console.log("old profile:", currentProfileImage);
  // console.log("old email:", currentEmail);

  // console.log("new profile:", newProfileImage);
  // console.log("new email:", newEmail);

  revalidatePath("/profile");
  redirect("/profile");
}

export default async function Edit() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const user = await prisma.user_data.findUnique({
    where: { id: data.user.id },
  });

  return (
    <Page
      email={user?.email || ""}
      profile_image={user?.profile_image || 0}
      uuid={user?.id || ""}
    />
  );
}

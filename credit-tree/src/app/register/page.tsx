"use server";

import Page from "./page.client";
import prisma from "@/app/prisma";
import validator from "validator";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { v4 as uuidv4 } from "uuid";

export async function createUser(prevState: any, formData: FormData) {
  const supabase = await createClient();

  let name = formData.get("name");
  let email = formData.get("email");
  let password = formData.get("password");
  let confirmPassword = formData.get("confirmPassword");

  name = name ? (name as string).trim() : "";
  email = email ? (email as string).trim() : "";
  password = password ? (password as string).trim() : "";
  confirmPassword = confirmPassword ? (confirmPassword as string).trim() : "";

  let pattern = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );

  if (
    name === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    return { message: "Error: You can't have any empty fields." };
  }

  if (!validator.isEmail(email as string)) {
    return { message: "Error: Invalid email address." };
  }

  if (!validator.isLength(password, { min: 8 })) {
    return {
      message: "Your password must be at least 8 characters long.",
    };
  }

  if (!validator.equals(password, confirmPassword)) {
    return {
      message: "Your passwords don't match. Please retry.",
    };
  }

  if (!pattern.test(password)) {
    return {
      message:
        "Your password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    };
  }

  const data = {
    email: email,
    password: password,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return { message: "There was an error when signing up." };
  }

  const user = await prisma.user_data.create({
    data: {
      name: name,
      email: email,
      password: await bcrypt.hash(password, 10),
    },
  });

  revalidatePath("/tree");
  redirect("/tree");
}

export default async function CreateAccount() {
  return (
    <>
      <Page />
    </>
  );
}

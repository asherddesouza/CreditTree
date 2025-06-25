"use server";

import Page from "./page.client";
import { redirect } from "next/navigation";
import prisma from "@/app/prisma";
import validator from "validator";
import bcrypt from "bcrypt";

export async function createUser(prevState: any, formData: FormData) {
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

  console.log({ name, email, password, confirmPassword });

  const user = await prisma.user_data.create({
    data: {
      name: name as string,
      email: email as string,
      password: await bcrypt.hash(password, 10),
    },
  });
}

export default async function CreateAccount() {
  return (
    <>
      <Page />
    </>
  );
}

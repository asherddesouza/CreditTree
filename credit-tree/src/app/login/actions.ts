import validator from "validator";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function loginUser(prevState: any, formData: FormData) {
  const supabase = await createClient();

  let email = formData.get("email");
  let password = formData.get("password");

  email = email ? (email as string).trim() : "";
  password = password ? (password as string).trim() : "";

  if (email === "" || password === "") {
    return { message: "Error: You can't have any empty fields." };
  }

  if (!validator.isEmail(email as string)) {
    return { message: "Error: Invalid email address format." };
  }

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log("Error:", error);
    return { message: "The email or password you've entered is incorrect." };
  }

  revalidatePath("/tree");
  redirect("/tree");
}

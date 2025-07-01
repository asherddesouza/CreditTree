"use server";

import { createClient } from "@/utils/supabase/server";

export async function verifyPassword(password: string): Promise<boolean> {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc("verify_user_password", {
    input_plain_password: password,
  });

  if (data.valid) {
    console.log("Password verification successful.");
    return true;
  } else {
    console.log("Password verification failed.");
    return false;
  }
}

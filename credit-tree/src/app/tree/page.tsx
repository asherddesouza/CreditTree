"use server";

import { Canvas } from "@react-three/fiber";
import CreditTree from "./page.client";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function Scene() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  console.log("User data:", data.user);

  return <CreditTree />;
}

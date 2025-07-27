"use server";

import CreditTree from "./page.client";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import generateInsights from "@/utils/insights-generator/src/generate-insights";

export default async function Scene() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  // console.log("User data:", data.user);

  const insights = await generateInsights(data.user.id);

  return <CreditTree />;
}

"use server";

import CreditTree from "./page.client";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import generateInsights from "@/utils/insights-generator/src/generate-insights";
import prisma from "../../../libs/prisma";

export default async function Scene() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const monthlyScoresResponse =
    await prisma.creditreport_monthly_scores_v1.findFirst({
      where: { id: data.user.id },
    });

  let creditScore;
  if (monthlyScoresResponse?.json) {
    const jsonObj =
      typeof monthlyScoresResponse.json === "string"
        ? JSON.parse(monthlyScoresResponse.json)
        : monthlyScoresResponse.json;
    creditScore = jsonObj?.scores?.[0]?.score;
  }

  console.log("Monthly Scores Data:", creditScore);

  const insights = await generateInsights(data.user.id);
  console.log("Generated Insights:", insights);

  return <CreditTree creditScore={900} insights={insights} />;
}

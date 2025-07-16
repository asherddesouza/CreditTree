"use server";

import { createClient } from "@/utils/supabase/server";
import prisma from "@/app/prisma";

type ScenarioKey =
  | "noCreditScore"
  | "lessThan200CreditScore"
  | "lessThan400CreditScore"
  | "lessThan600CreditScore"
  | "lessThan800CreditScore"
  | "lessThan1000CreditScore";

function generateJsonData(uuid: string) {
  const jsonData = {
    noCreditScore: {
      label: "PSOLF01",
      bureau: "EQUIFAX",
      market: "UK",
      scores: [],
      maxScore: 1000,
      userUuid: uuid,
    },
    lessThan200CreditScore: {
      label: "PSOLF01",
      bureau: "EQUIFAX",
      market: "UK",
      scores: [{ year: 2025, month: 7, score: 131, change: null }],
      maxScore: 1000,
      userUuid: uuid,
    },
    lessThan400CreditScore: {
      label: "PSOLF01",
      bureau: "EQUIFAX",
      market: "UK",
      scores: [{ year: 2025, month: 7, score: 342, change: null }],
      maxScore: 1000,
      userUuid: uuid,
    },
    lessThan600CreditScore: {
      label: "PSOLF01",
      bureau: "EQUIFAX",
      market: "UK",
      scores: [{ year: 2025, month: 7, score: 513, change: null }],
      maxScore: 1000,
      userUuid: uuid,
    },
    lessThan800CreditScore: {
      label: "PSOLF01",
      bureau: "EQUIFAX",
      market: "UK",
      scores: [{ year: 2025, month: 7, score: 742, change: null }],
      maxScore: 1000,
      userUuid: uuid,
    },
    lessThan1000CreditScore: {
      label: "PSOLF01",
      bureau: "EQUIFAX",
      market: "UK",
      scores: [{ year: 2025, month: 7, score: 931, change: null }],
      maxScore: 1000,
      userUuid: uuid,
    },
  };

  const scenarios = Object.keys(jsonData) as ScenarioKey[];
  const randomKey = scenarios[Math.floor(Math.random() * scenarios.length)];

  return jsonData[randomKey];
}

export default async function MonthlyScoresV1Seeder() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    console.log("Error fetching user data:", error);
  } else {
    const user = await prisma.user_data.findUnique({
      where: { id: data.user.id },
    });

    const jsonData = generateJsonData(user?.id || "");

    // console.log("Generated JSON Data:", jsonData);

    const seedingData = await prisma.creditreport_monthly_scores_v1.create({
      data: {
        id: user?.id || "",
        bureau: "EQUIFAX",
        json: jsonData,
      },
    });

    // console.log(JSON.stringify(jsonData));
  }
}

// Mock up some JSON for the specific scenarios, map them to an indexed object, random access of indexes,
// then on sign up trigger off a server action which inserts the JSONs to your DB alongside the newly generated user UUID

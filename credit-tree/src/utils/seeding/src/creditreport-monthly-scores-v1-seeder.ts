"use server";

import { createClient } from "@/utils/supabase/server";
import prisma from "../../../../libs/prisma";

type ScenarioKey =
  | "noCreditScore"
  | "lessThan200CreditScore"
  | "lessThan400CreditScore"
  | "lessThan600CreditScore"
  | "lessThan800CreditScore"
  | "lessThan1000CreditScore";

export async function generateJsonData(uuid: string) {
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

export default async function MonthlyScoresV1Seeder(
  uuid: string,
  jsonData: Record<string, any> = {}
) {
  try {
    await prisma.creditreport_monthly_scores_v1.create({
      data: {
        id: uuid,
        bureau: "EQUIFAX",
        json: jsonData,
      },
    });
  } catch (error) {
    console.error("Error in MonthlyScoresV1Seeder:", error);
  }

  return uuid;
}

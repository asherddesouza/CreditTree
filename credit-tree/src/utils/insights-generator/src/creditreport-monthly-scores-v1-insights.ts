"use server";

import prisma from "../../../../libs/prisma";

import { MonthlyScoresToInsightDate } from "@/utils/date-conversion";

interface MonthlyScoresInsight {
  title: string;
  date: string;
  numberChange?: {
    from: string;
    to: string;
    sentiment: "positive" | "negative";
  };
  description: string;
  birdColour?: "green" | "red";
}

interface MonthlyScoresJson {
  label: string;
  bureau: string;
  market: string;
  scores: any[];
  maxScore: number;
  userUuid: string;
}

export interface ScoreData {
  year: number;
  month: number;
  score: number;
  change: number;
}

export default async function MonthlyScoresV1Insights(uuid: string) {
  try {
    const monthlyScoresInsights: MonthlyScoresInsight[] = [];
    const monthlyScoresData =
      await prisma.creditreport_monthly_scores_v1.findFirst({
        where: { id: uuid },
      });

    if (!monthlyScoresData) {
      throw new Error("No Monthly Scores found.");
    }

    const monthlyScoresResponse: MonthlyScoresJson = monthlyScoresData?.json
      ? typeof monthlyScoresData.json === "string"
        ? JSON.parse(monthlyScoresData.json)
        : monthlyScoresData.json
      : null;

    if (!monthlyScoresResponse) {
      throw new Error("Invalid or missing monthly scores JSON data.");
    }

    const currentScoreData = monthlyScoresResponse.scores[0] || null;

    if (currentScoreData.score === null) {
      const noMonthlyScoresInsight: MonthlyScoresInsight = {
        title: "Credit Score not found",
        date:
          MonthlyScoresToInsightDate(currentScoreData) || "Date Unavailable",
        description:
          "You currently have no credit score on your credit report. This means that there's not enough information about you on your financial track record",
        birdColour: "red",
      };

      monthlyScoresInsights.push(noMonthlyScoresInsight);
    } else if (currentScoreData && currentScoreData.change > 0) {
      const monthlyScoreIncreasedInsight: MonthlyScoresInsight = {
        title: "Your credit score increased!",
        date:
          MonthlyScoresToInsightDate(currentScoreData) || "Date Unavailable",
        numberChange: {
          from: `${currentScoreData.score - currentScoreData.change}`,
          to: `${currentScoreData.score}`,
          sentiment: "positive",
        },
        description: "Nice! This shows that your credit health is improving.",
        birdColour: "green",
      };

      monthlyScoresInsights.push(monthlyScoreIncreasedInsight);
    } else if (currentScoreData && currentScoreData.change < 0) {
      const monthlyScoreDecreasedInsight: MonthlyScoresInsight = {
        title: "Your credit score went down!",
        date:
          MonthlyScoresToInsightDate(currentScoreData) || "Date Unavailable",
        numberChange: {
          from: `${currentScoreData.score - currentScoreData.change}`,
          to: `${currentScoreData.score}`,
          sentiment: "negative",
        },
        description:
          "Your credit score has decreased! Don't worry, this can happen for a number of reasons. It's important to check your credit report for any negative information that may have affected your score.",
        birdColour: "red",
      };

      monthlyScoresInsights.push(monthlyScoreDecreasedInsight);
    }

    return monthlyScoresInsights;
  } catch (error) {
    console.error("Error generating Monthly Scores V1 insights:", error);
    throw error;
  }
}

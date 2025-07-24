"use server";

import prisma from "../../../../libs/prisma";

import { SerialDayToMonthAndYear } from "@/utils/date-conversion";

interface RankedInsightsByMonthInsight {
  title: string;
  date: string;
  description: string;
  infoCard?: {
    iconUrl: string;
    name: string;
    number?: string;
    type: string;
  };
  birdColour?:
    | "green"
    | "red"
    | "blue"
    | "yellow"
    | "purple"
    | "pink"
    | "black";
}

interface RankedInsightsByMonthJson {
  month: number;
  userUuid: string;
  rankedInsights: any[];
}

function findInsightByType(rankedInsights: any[], searchTerm: string) {
  const rawInsight = rankedInsights.find(
    (insight) => insight?.meta?.insightTypeName === searchTerm
  );

  if (!rawInsight) {
    return "Insight not found";
  }

  return rawInsight;
}

export default async function RankedInsightsByMonthV1Insights(uuid: string) {
  try {
    let rankedInsightsByMonthInsights: RankedInsightsByMonthInsight[] = [];
    const rankedInsightsByMonthData =
      await prisma.creditreport_ranked_insights_by_month_v1.findFirst({
        where: { id: uuid },
      });

    if (!rankedInsightsByMonthData) {
      throw new Error("No Ranked Insights By Month found.");
    }

    const rankedInsightsByMonthResponse: RankedInsightsByMonthJson =
      rankedInsightsByMonthData?.json
        ? typeof rankedInsightsByMonthData.json === "string"
          ? JSON.parse(rankedInsightsByMonthData.json)
          : rankedInsightsByMonthData.json
        : null;

    if (!rankedInsightsByMonthResponse) {
      throw new Error("Invalid or missing ranked insights by month JSON data.");
    }

    if (
      !rankedInsightsByMonthResponse?.rankedInsights ||
      rankedInsightsByMonthResponse?.rankedInsights.length !== 0
    ) {
      if (
        findInsightByType(
          rankedInsightsByMonthResponse?.rankedInsights,
          "hard-search-added"
        ) !== "Insight not found"
      ) {
        const hardSearchAddedInsight = findInsightByType(
          rankedInsightsByMonthResponse?.rankedInsights,
          "hard-search-added"
        );

        const someRankedInsightsByMonthInsight: RankedInsightsByMonthInsight = {
          title: "You have a new hard search on your report!",
          date:
            SerialDayToMonthAndYear(rankedInsightsByMonthResponse?.month) ||
            "Date Unavailable",
          description:
            "A hard search typically stays on your credit report for up to 12 months. However, even though they are visible to lenders for a year, the impact on your score is most significant shortly after the check.",
          infoCard: {
            iconUrl: "/resources/documents.png",
            name: `${hardSearchAddedInsight?.details?.change?.clientName}`,
            type: "Hard Search",
          },
          birdColour: "yellow",
        };

        rankedInsightsByMonthInsights.push(someRankedInsightsByMonthInsight);
      }
    }

    return rankedInsightsByMonthInsights;
  } catch (error) {
    console.error(
      "Error generating Ranked Insights By Month V1 insights:",
      error
    );
    throw error;
  }
}

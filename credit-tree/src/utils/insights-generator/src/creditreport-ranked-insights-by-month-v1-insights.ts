"use server";

import prisma from "../../../../libs/prisma";

import { ISODateToMonthAndYear } from "@/utils/date-conversion";

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
  birdColour?: "yellow" | "purple";
}

interface RankedInsightsByMonthJson {
  month: string;
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
    const rankedInsightsByMonthInsights: RankedInsightsByMonthInsight[] = [];
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
        const hardSearchAdded = findInsightByType(
          rankedInsightsByMonthResponse?.rankedInsights,
          "hard-search-added"
        );

        const hardSearchAddedInsight: RankedInsightsByMonthInsight = {
          title: "You have a new hard search on your report!",
          date:
            ISODateToMonthAndYear(rankedInsightsByMonthResponse?.month) ||
            "Date Unavailable",
          description:
            "A hard search typically stays on your credit report for up to 12 months. However, even though they are visible to lenders for a year, the impact on your score is most significant shortly after the check.",
          infoCard: {
            iconUrl: "/resources/documents.png",
            name: `${hardSearchAdded?.details?.change?.clientName}`,
            type: "Hard Search",
          },
          birdColour: "yellow",
        };

        rankedInsightsByMonthInsights.push(hardSearchAddedInsight);
      }

      if (
        findInsightByType(
          rankedInsightsByMonthResponse?.rankedInsights,
          "password-breach"
        ) !== "Insight not found"
      ) {
        const passwordBreachAdded = findInsightByType(
          rankedInsightsByMonthResponse?.rankedInsights,
          "password-breach"
        );

        const passwordBreachAddedInsight: RankedInsightsByMonthInsight = {
          title: "You have a new password breach on your report!",
          date:
            ISODateToMonthAndYear(rankedInsightsByMonthResponse?.month) ||
            "Date Unavailable",
          description: `A password from ${passwordBreachAdded?.details?.details?.breachDomains} has been found in a data breach. Change your password immediately to protect your account.`,
          infoCard: {
            iconUrl: "/resources/documents.png",
            name: `${passwordBreachAdded?.details?.details?.maskedPassword}`,
            type: "Password Breach",
          },
          birdColour: "purple",
        };

        rankedInsightsByMonthInsights.push(passwordBreachAddedInsight);
      }

      if (
        findInsightByType(
          rankedInsightsByMonthResponse?.rankedInsights,
          "email-data-breach"
        ) !== "Insight not found"
      ) {
        const emailDataBreachAdded = findInsightByType(
          rankedInsightsByMonthResponse?.rankedInsights,
          "email-data-breach"
        );

        const emailDataBreachAddedInsight: RankedInsightsByMonthInsight = {
          title: "You have a new email data breach on your report!",
          date:
            ISODateToMonthAndYear(rankedInsightsByMonthResponse?.month) ||
            "Date Unavailable",
          description: `An email from ${emailDataBreachAdded?.details?.details?.title} has been found in a data breach. Change your email immediately to protect your account.`,
          infoCard: {
            iconUrl: "/resources/documents.png",
            name: `${emailDataBreachAdded?.details?.details?.email}`,
            type: "Email Data Breach",
          },
          birdColour: "purple",
        };

        rankedInsightsByMonthInsights.push(emailDataBreachAddedInsight);
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

"use server";

import prisma from "../../../../libs/prisma";

import { UnixToMonthAndYear } from "@/utils/date-conversion";

interface InsolvenciesInsight {
  title: string;
  date: string;
  description: string;
  birdColour?:
    | "green"
    | "red"
    | "blue"
    | "yellow"
    | "purple"
    | "pink"
    | "black";
}

interface InsolvenciesJson {
  bureau: string;
  market: string;
  reportId: string;
  userUuid: string;
  insolvencies: any[];
  reportTimestamp: number;
}

export default async function InsolvenciesV1Insights(uuid: string) {
  try {
    let insolvenciesInsights: InsolvenciesInsight[] = [];
    const insolvenciesData =
      await prisma.creditreport_insolvencies_v1.findFirst({
        where: { id: uuid },
      });

    if (!insolvenciesData) {
      throw new Error("No Insolvencies found.");
    }

    const insolvenciesResponse: InsolvenciesJson = insolvenciesData?.json
      ? typeof insolvenciesData.json === "string"
        ? JSON.parse(insolvenciesData.json)
        : insolvenciesData.json
      : null;

    if (!insolvenciesResponse) {
      throw new Error("Invalid or missing insolvencies JSON data.");
    }

    if (
      !insolvenciesResponse?.insolvencies ||
      insolvenciesResponse?.insolvencies.length !== 0
    ) {
      const insolvenciesCount = insolvenciesResponse.insolvencies.length;

      const someInsolvenciesInsight: InsolvenciesInsight = {
        title: "Insolvencies Found",
        date:
          UnixToMonthAndYear(insolvenciesResponse?.reportTimestamp) ||
          "Date Unavailable",
        description: `You have ${insolvenciesCount} insolvenc${
          insolvenciesCount === 1 ? "y" : "ies"
        } on your credit report. This will stay on your credit report for 6 years and can significantly impact your credit score.`,
        birdColour: "blue",
      };

      insolvenciesInsights.push(someInsolvenciesInsight);
    }

    console.log("Insolvencies Insights:", insolvenciesInsights);

    return insolvenciesInsights;
  } catch (error) {
    console.error("Error generating Insolvencies V1 insights:", error);
    throw error;
  }
}

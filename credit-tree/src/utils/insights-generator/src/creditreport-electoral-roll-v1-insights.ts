"use server";

import prisma from "../../../../libs/prisma";

import { UnixToMonthAndYear } from "@/utils/date-conversion";

interface ElectoralRollInsight {
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

interface ElectoralRollJson {
  bureau: string;
  market: string;
  reportId: string;
  userUuid: string;
  electoralRollData: any[];
  reportTimestamp: number;
}

export default async function ElectoralRollV1Insights(uuid: string) {
  try {
    let electoralRollInsights: ElectoralRollInsight[] = [];
    const electoralRollData =
      await prisma.creditreport_electoral_roll_v1.findFirst({
        where: { id: uuid },
      });

    if (!electoralRollData) {
      throw new Error("No Electoral Roll data found.");
    }

    const electoralRollResponse: ElectoralRollJson = electoralRollData?.json
      ? typeof electoralRollData.json === "string"
        ? JSON.parse(electoralRollData.json)
        : electoralRollData.json
      : null;

    if (!electoralRollResponse) {
      throw new Error("Invalid or missing electoral roll JSON data.");
    }

    if (
      !electoralRollResponse?.electoralRollData ||
      electoralRollResponse?.electoralRollData.length === 0
    ) {
      const noElectoralRollInsight: ElectoralRollInsight = {
        title: "No Electoral Roll Data",
        date:
          UnixToMonthAndYear(electoralRollResponse?.reportTimestamp) ||
          "Date Unavailable",
        description:
          "You have no electoral roll data on your credit report. Being on the electoral roll can help improve your credit score, because it shows lenders that you are registered at your address.",
        birdColour: "blue",
      };

      electoralRollInsights.push(noElectoralRollInsight);
    } else {
      const someElectoralRollInsight: ElectoralRollInsight = {
        title: "Electoral Roll Data Found",
        date:
          UnixToMonthAndYear(electoralRollResponse?.reportTimestamp) ||
          "Date Unavailable",
        description: `You have been registered on the electoral roll at your current address since ${electoralRollResponse?.electoralRollData[0]?.annualRegisterPeriod.start}. This is a positive indicator of your overall credit health.`,
        birdColour: "blue",
      };

      electoralRollInsights.push(someElectoralRollInsight);
    }

    return electoralRollInsights;
  } catch (error) {
    console.error("Error generating Electoral Roll V1 insights:", error);
    throw error;
  }
}

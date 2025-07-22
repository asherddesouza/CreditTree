"use server";

import prisma from "../../../../libs/prisma";

import UnixToMonthAndYear from "@/utils/unix-conversion";

interface FraudWarningsInsight {
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

interface FraudWarningsJson {
  bureau: string;
  market: string;
  reportId: string;
  userUuid: string;
  fraudWarnings: any[];
  reportTimestamp: number;
}

export default async function FraudWarningsV1Insights(uuid: string) {
  try {
    let fraudWarningsInsights: FraudWarningsInsight[] = [];
    const fraudWarningsData =
      await prisma.creditreport_fraud_warnings_v1.findFirst({
        where: { id: uuid },
      });

    if (!fraudWarningsData) {
      throw new Error("No Fraud Warnings found.");
    }

    const fraudWarningsResponse: FraudWarningsJson = fraudWarningsData?.json
      ? typeof fraudWarningsData.json === "string"
        ? JSON.parse(fraudWarningsData.json)
        : fraudWarningsData.json
      : null;

    if (!fraudWarningsResponse) {
      throw new Error("Invalid or missing fraud warnings JSON data.");
    }

    if (
      !fraudWarningsResponse?.fraudWarnings ||
      fraudWarningsResponse?.fraudWarnings.length === 0
    ) {
      const noFraudWarningsInsight: FraudWarningsInsight = {
        title: "No Fraud Warnings",
        date:
          UnixToMonthAndYear(fraudWarningsResponse?.reportTimestamp) ||
          "Date Unavailable",
        description:
          "You have no fraud warnings on your credit report. This is a positive indicator of your overall credit health.",
        birdColour: "blue",
      };

      fraudWarningsInsights.push(noFraudWarningsInsight);
    } else {
      const fraudWarningsCount = fraudWarningsResponse.fraudWarnings.length;

      const someFraudWarningsInsight: FraudWarningsInsight = {
        title: "Fraud Warnings Found",
        date:
          UnixToMonthAndYear(fraudWarningsResponse?.reportTimestamp) ||
          "Date Unavailable",
        description: `You have ${fraudWarningsCount} fraud ${
          fraudWarningsCount === 1 ? "warning" : "warnings"
        } on your credit report. These are indicators that you might be at risk of identity theft or fraud, prompting lenders to take extra steps to verify your identity before granting credit.`,
        birdColour: "blue",
      };

      fraudWarningsInsights.push(someFraudWarningsInsight);
    }

    return fraudWarningsInsights;
  } catch (error) {
    console.error("Error generating Fraud Warnings V1 insights:", error);
    throw error;
  }
}

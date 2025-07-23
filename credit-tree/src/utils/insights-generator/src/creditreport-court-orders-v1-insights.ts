"use server";

import prisma from "../../../../libs/prisma";

import { UnixToMonthAndYear } from "@/utils/date-conversion";

interface CourtOrdersInsight {
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

interface CourtOrdersJson {
  bureau: string;
  market: string;
  reportId: string;
  userUuid: string;
  courtOrders: any[];
  reportTimestamp: number;
}

export default async function CourtOrdersV1Insights(uuid: string) {
  try {
    let courtOrdersInsights: CourtOrdersInsight[] = [];
    const courtOrdersData = await prisma.creditreport_court_orders_v1.findFirst(
      {
        where: { id: uuid },
      }
    );

    if (!courtOrdersData) {
      throw new Error("No Court Orders found.");
    }

    const courtOrdersResponse: CourtOrdersJson = courtOrdersData?.json
      ? typeof courtOrdersData.json === "string"
        ? JSON.parse(courtOrdersData.json)
        : courtOrdersData.json
      : null;

    if (!courtOrdersResponse) {
      throw new Error("Invalid or missing court orders JSON data.");
    }

    if (
      !courtOrdersResponse?.courtOrders ||
      courtOrdersResponse?.courtOrders.length === 0
    ) {
      const noCourtOrdersInsight: CourtOrdersInsight = {
        title: "No Court Orders",
        date:
          UnixToMonthAndYear(courtOrdersResponse?.reportTimestamp) ||
          "Date Unavailable",
        description:
          "You have no court orders on your credit report. This is a positive indicator of your overall credit health.",
        birdColour: "blue",
      };

      courtOrdersInsights.push(noCourtOrdersInsight);
    } else {
      const courtOrdersCount = courtOrdersResponse.courtOrders.length;

      const someCourtOrdersInsight: CourtOrdersInsight = {
        title: "Court Orders Found",
        date:
          UnixToMonthAndYear(courtOrdersResponse?.reportTimestamp) ||
          "Date Unavailable",
        description: `You have ${courtOrdersCount} court ${
          courtOrdersCount === 1 ? "order" : "orders"
        } on your credit report.`,
        birdColour: "blue",
      };

      courtOrdersInsights.push(someCourtOrdersInsight);
    }

    return courtOrdersInsights;
  } catch (error) {
    console.error("Error generating Court Orders V1 insights:", error);
    throw error;
  }
}

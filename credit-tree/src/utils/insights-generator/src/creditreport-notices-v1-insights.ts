"use server";

import prisma from "../../../../libs/prisma";

import { UnixToMonthAndYear } from "@/utils/date-conversion";

interface NoticesInsight {
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

interface NoticesJson {
  bureau: string;
  market: string;
  reportId: string;
  userUuid: string;
  notices: any[];
  reportTimestamp: number;
}

export default async function NoticesV1Insights(uuid: string) {
  try {
    const noticesInsights: NoticesInsight[] = [];
    const noticesData = await prisma.creditreport_notices_v1.findFirst({
      where: { id: uuid },
    });

    if (!noticesData) {
      throw new Error("No Notices found.");
    }

    const noticesResponse: NoticesJson = noticesData?.json
      ? typeof noticesData.json === "string"
        ? JSON.parse(noticesData.json)
        : noticesData.json
      : null;

    if (!noticesResponse) {
      throw new Error("Invalid or missing notices JSON data.");
    }

    if (!noticesResponse?.notices || noticesResponse?.notices.length !== 0) {
      const noticesCount = noticesResponse.notices.length;

      const someNoticesInsight: NoticesInsight = {
        title: "Notices Found",
        date:
          UnixToMonthAndYear(noticesResponse?.reportTimestamp) ||
          "Date Unavailable",
        description: `You have ${noticesCount} notice${
          noticesCount === 1 ? "" : "s"
        } on your credit report.`,
        birdColour: "blue",
      };

      noticesInsights.push(someNoticesInsight);
    }

    return noticesInsights;
  } catch (error) {
    console.error("Error generating Notices V1 insights:", error);
    throw error;
  }
}

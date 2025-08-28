"use server";

import prisma from "../../../../libs/prisma";

import { UnixToMonthAndYear } from "@/utils/date-conversion";

interface PaymentHistoryInsight {
  title: string;
  date: string;
  description: string;
  birdColour?: "black";
}

interface PaymentHistoryJson {
  bureau: string;
  market: string;
  reportId: string;
  userUuid: string;
  numberOfMissedPayments: number;
  paymentHistoryOverview: any[];
  numberOfNewMissedPayments: number;
  reportTimestamp: number;
}

export default async function PaymentHistoryV1Insights(uuid: string) {
  try {
    const paymentHistoryInsights: PaymentHistoryInsight[] = [];
    const paymentHistoryData =
      await prisma.creditreport_payment_history_overview_v1.findFirst({
        where: { id: uuid },
      });

    if (!paymentHistoryData) {
      throw new Error("No Payment History found.");
    }

    const paymentHistoryResponse: PaymentHistoryJson = paymentHistoryData?.json
      ? typeof paymentHistoryData.json === "string"
        ? JSON.parse(paymentHistoryData.json)
        : paymentHistoryData.json
      : null;

    if (!paymentHistoryResponse) {
      throw new Error("Invalid or missing payment history JSON data.");
    }

    if (
      !paymentHistoryResponse?.paymentHistoryOverview ||
      paymentHistoryResponse?.paymentHistoryOverview.length === 0
    ) {
      const noPaymentHistoryInsight: PaymentHistoryInsight = {
        title: "No Payment History",
        date:
          UnixToMonthAndYear(paymentHistoryResponse?.reportTimestamp) ||
          "Date Unavailable",
        description:
          "You have no payment history data on your credit report. This means that we're unable to provide insights into your payment behavior.",
        birdColour: "black",
      };

      paymentHistoryInsights.push(noPaymentHistoryInsight);
    } else if (paymentHistoryResponse?.numberOfMissedPayments === 0) {
      const noMissedPaymentsInsight: PaymentHistoryInsight = {
        title: "No Missed Payments",
        date:
          UnixToMonthAndYear(paymentHistoryResponse?.reportTimestamp) ||
          "Date Unavailable",
        description:
          "You have no missed payments on your credit report. Keep it up!",
        birdColour: "black",
      };

      paymentHistoryInsights.push(noMissedPaymentsInsight);
    } else if (paymentHistoryResponse?.numberOfMissedPayments > 0) {
      const someMissedPaymentsInsight: PaymentHistoryInsight = {
        title: "Missed Payments found",
        date:
          UnixToMonthAndYear(paymentHistoryResponse?.reportTimestamp) ||
          "Date Unavailable",
        description: `You have ${
          paymentHistoryResponse?.numberOfMissedPayments
        } missed ${
          paymentHistoryResponse?.numberOfMissedPayments === 1
            ? "payment"
            : "payments"
        } on your credit report. This can negatively impact your credit score and overall credit health.`,
        birdColour: "black",
      };

      paymentHistoryInsights.push(someMissedPaymentsInsight);
    }

    return paymentHistoryInsights;
  } catch (error) {
    console.error("Error generating Payment History V1 insights:", error);
    throw error;
  }
}

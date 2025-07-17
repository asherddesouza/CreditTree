"use server";

import prisma from "@/app/prisma";

type ScenarioKey =
  | "noPaymentHistoryData"
  | "noMissedPayments"
  | "someMissedPayments";

export async function generateJsonData(uuid: string) {
  const jsonData = {
    noPaymentHistoryData: {
      bureau: "EQUIFAX",
      market: "GB",
      reportId: "45200474",
      userUuid: uuid,
      reportTimestamp: 1752091331477,
      numberOfMissedPayments: 0,
      paymentHistoryOverview: [],
      numberOfNewMissedPayments: 0,
    },
    noMissedPayments: {
      bureau: "EQUIFAX",
      market: "GB",
      reportId: "45200474",
      userUuid: uuid,
      reportTimestamp: 1752091331425,
      numberOfMissedPayments: 0,
      paymentHistoryOverview: [
        {
          year: 2023,
          months: [
            { month: 1, status: "no-data" },
            { month: 2, status: "on-time" },
            { month: 3, status: "on-time" },
            { month: 4, status: "on-time" },
            { month: 5, status: "on-time" },
            { month: 6, status: "on-time" },
            { month: 7, status: "on-time" },
            { month: 8, status: "on-time" },
            { month: 9, status: "on-time" },
            { month: 10, status: "on-time" },
            { month: 11, status: "on-time" },
            { month: 12, status: "on-time" },
          ],
          status: "on-time",
          missedPayments: [],
          missedPaymentCount: 0,
        },
        {
          year: 2024,
          months: [
            { month: 1, status: "on-time" },
            { month: 2, status: "on-time" },
            { month: 3, status: "on-time" },
            { month: 4, status: "on-time" },
            { month: 5, status: "on-time" },
            { month: 6, status: "on-time" },
            { month: 7, status: "on-time" },
            { month: 8, status: "on-time" },
            { month: 9, status: "on-time" },
            { month: 10, status: "on-time" },
            { month: 11, status: "on-time" },
            { month: 12, status: "on-time" },
          ],
          status: "on-time",
          missedPayments: [],
          missedPaymentCount: 0,
        },
        {
          year: 2025,
          months: [
            { month: 1, status: "on-time" },
            { month: 2, status: "on-time" },
            { month: 3, status: "on-time" },
            { month: 4, status: "on-time" },
            { month: 5, status: "on-time" },
            { month: 6, status: "on-time" },
            { month: 7, status: "on-time" },
            { month: 8, status: "no-data" },
            { month: 9, status: "no-data" },
            { month: 10, status: "no-data" },
            { month: 11, status: "no-data" },
            { month: 12, status: "no-data" },
          ],
          status: "on-time",
          missedPayments: [],
          missedPaymentCount: 0,
        },
      ],
      numberOfNewMissedPayments: 0,
    },
    someMissedPayments: {
      bureau: "EQUIFAX",
      market: "GB",
      reportId: "45200474",
      userUuid: uuid,
      reportTimestamp: 1752091331631,
      numberOfMissedPayments: 3,
      paymentHistoryOverview: [
        {
          year: 2024,
          months: [
            { month: 1, status: "on-time" },
            { month: 2, status: "on-time" },
            { month: 3, status: "on-time" },
            { month: 4, status: "on-time" },
            { month: 5, status: "on-time" },
            { month: 6, status: "on-time" },
            { month: 7, status: "on-time" },
            { month: 8, status: "on-time" },
            { month: 9, status: "on-time" },
            { month: 10, status: "on-time" },
            { month: 11, status: "missed" },
            { month: 12, status: "missed" },
          ],
          status: "on-time",
          missedPayments: ["Barclays", "HSBC"],
          missedPaymentCount: 2,
        },
        {
          year: 2025,
          months: [
            { month: 1, status: "on-time" },
            { month: 2, status: "on-time" },
            { month: 3, status: "on-time" },
            { month: 4, status: "on-time" },
            { month: 5, status: "on-time" },
            { month: 6, status: "missed" },
            { month: 7, status: "on-time" },
            { month: 8, status: "no-data" },
            { month: 9, status: "no-data" },
            { month: 10, status: "no-data" },
            { month: 11, status: "no-data" },
            { month: 12, status: "no-data" },
          ],
          status: "on-time",
          missedPayments: ["AMEX"],
          missedPaymentCount: 1,
        },
      ],
      numberOfNewMissedPayments: 0,
    },
  };

  const scenarios = Object.keys(jsonData) as ScenarioKey[];
  const randomKey = scenarios[Math.floor(Math.random() * scenarios.length)];

  return jsonData[randomKey];
}

export default async function PaymentHistoryOverviewV1Seeder(
  uuid: string,
  jsonData: Record<string, any> = {}
) {
  try {
    await prisma.creditreport_payment_history_overview_v1.create({
      data: {
        id: uuid,
        bureau: "EQUIFAX",
        json: jsonData,
      },
    });
  } catch (error) {
    console.error("Error in PaymentHistoryOverviewV1Seeder:", error);
  }

  return uuid;
}

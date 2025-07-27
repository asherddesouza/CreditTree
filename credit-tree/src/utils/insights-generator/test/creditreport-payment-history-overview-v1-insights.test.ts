import PaymentHistoryOverviewV1Insights from "../src/creditreport-payment-history-overview-v1-insights";
import { expect, vi } from "vitest";
import prisma from "../../../../libs/__mocks__/prisma";

vi.mock("../../../../libs/prisma.ts");

const noPaymentHistoryOverviewData = {
  bureau: "EQUIFAX",
  market: "GB",
  reportId: "45200474",
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
  reportTimestamp: 1752091331477,
  numberOfMissedPayments: 0,
  paymentHistoryOverview: [],
  numberOfNewMissedPayments: 0,
};

const positivePaymentHistoryOverviewData = {
  bureau: "EQUIFAX",
  market: "GB",
  reportId: "45200474",
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
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
};

const negativePaymentHistoryOverviewData = {
  bureau: "EQUIFAX",
  market: "GB",
  reportId: "45200474",
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
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
};

describe("PaymentHistoryOverviewV1Insights Tests", () => {
  it("should return a positive payment history overview insight", async () => {
    prisma.creditreport_payment_history_overview_v1.findFirst.mockResolvedValue(
      {
        json: positivePaymentHistoryOverviewData,
      }
    );

    const insights = await PaymentHistoryOverviewV1Insights(
      positivePaymentHistoryOverviewData.userUuid
    );

    expect(insights).toEqual([
      {
        birdColour: "blue",
        date: "Jul 2025",
        description:
          "You have no missed payments on your credit report. Keep it up!",
        title: "No Missed Payments",
      },
    ]);
  });

  it("should return a negative payment history overview insight", async () => {
    prisma.creditreport_payment_history_overview_v1.findFirst.mockResolvedValue(
      {
        json: negativePaymentHistoryOverviewData,
      }
    );

    const insights = await PaymentHistoryOverviewV1Insights(
      negativePaymentHistoryOverviewData.userUuid
    );

    expect(insights).toEqual([
      {
        birdColour: "blue",
        date: "Jul 2025",
        description:
          "You have 3 missed payments on your credit report. This can negatively impact your credit score and overall credit health.",
        title: "Missed Payments found",
      },
    ]);
  });

  it("should return an insight when a user has no payment history overview", async () => {
    prisma.creditreport_payment_history_overview_v1.findFirst.mockResolvedValue(
      {
        json: noPaymentHistoryOverviewData,
      }
    );

    const insights = await PaymentHistoryOverviewV1Insights(
      noPaymentHistoryOverviewData.userUuid
    );

    expect(insights).toEqual([
      {
        birdColour: "blue",
        date: "Jul 2025",
        description:
          "You have no payment history data on your credit report. This means that we're unable to provide insights into your payment behavior.",
        title: "No Payment History",
      },
    ]);
  });

  it("should throw an error when no payment history overview data is found", async () => {
    prisma.creditreport_payment_history_overview_v1.findFirst.mockResolvedValue(
      null
    );

    await expect(
      PaymentHistoryOverviewV1Insights(noPaymentHistoryOverviewData.userUuid)
    ).rejects.toThrow("No Payment History found.");
  });

  it("should throw an error when payment history overview JSON data is invalid", async () => {
    prisma.creditreport_payment_history_overview_v1.findFirst.mockResolvedValue(
      noPaymentHistoryOverviewData
    );

    await expect(
      PaymentHistoryOverviewV1Insights(noPaymentHistoryOverviewData.userUuid)
    ).rejects.toThrow("Invalid or missing payment history JSON data.");
  });
});

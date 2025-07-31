import CourtOrdersV1Insights from "../src/creditreport-court-orders-v1-insights";
import { expect, vi } from "vitest";
import prisma from "../../../../libs/__mocks__/prisma";

vi.mock("../../../../libs/prisma.ts");

const noCourtOrdersData = {
  bureau: "EQUIFAX",
  market: "UK",
  reportId: "42602713",
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
  courtOrders: [],
  reportTimestamp: 1683333295777,
};

const oneCourtOrdersData = {
  bureau: "EQUIFAX",
  market: "UK",
  reportId: "42602713",
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
  courtOrders: [
    {
      amount: {
        value: 1425,
        currency: "GBP",
        decimals: 2,
      },
      caseId: "563829PX",
      addressId: "12345220",
      courtName: "OLD LOCKUP COURT, YORKSHIRE",
      plaintiff: null,
      startDate: 1461024000000,
      satisfiedDate: 1468886400000,
      classification: {
        category: "CourtOrder",
        description: "CourtJudgement",
        originalCode: "GB/EFX/CJ",
      },
      personalDetailsId: "Q/afE0pGsXwAV/L9XGab0jB9eeX4mJj12x5kzLK6S5A=",
    },
  ],
  reportTimestamp: 1683333295324,
};

const twoCourtOrdersData = {
  bureau: "EQUIFAX",
  market: "UK",
  reportId: "42602713",
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
  courtOrders: [
    {
      amount: {
        value: 1425,
        currency: "GBP",
        decimals: 2,
      },
      caseId: "563829PX",
      addressId: "12345220",
      courtName: "OLD LOCKUP COURT, YORKSHIRE",
      plaintiff: null,
      startDate: 1461024000000,
      satisfiedDate: 1468886400000,
      classification: {
        category: "CourtOrder",
        description: "CourtJudgement",
        originalCode: "GB/EFX/CJ",
      },
      personalDetailsId: "Q/afE0pGsXwAV/L9XGab0jB9eeX4mJj12x5kzLK6S5A=",
    },
    {
      amount: {
        value: 105,
        currency: "GBP",
        decimals: 2,
      },
      caseId: "1234566PX",
      addressId: "12345220",
      courtName: "OLD LOCKUP COURT, YORKSHIRE",
      plaintiff: null,
      startDate: 1445212800000,
      satisfiedDate: null,
      classification: {
        category: "CourtOrder",
        description: "CourtJudgement",
        originalCode: "GB/EFX/CJ",
      },
      personalDetailsId: "Q/afE0pGsXwAV/L9XGab0jB9eeX4mJj12x5kzLK6S5A=",
    },
  ],
  reportTimestamp: 1683333295071,
};

const invalidCourtOrdersData = {
  bureau: "EQUIFAX",
  market: "UK",
  reportId: "42602713",
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
  courtOrders: { order1: "yesterday", order2: "today" },
  reportTimestamp: 1683333295777,
};

describe("CourtOrdersV1Insights Tests", () => {
  it("should return court orders insights when present", async () => {
    prisma.creditreport_court_orders_v1.findFirst.mockResolvedValue({
      json: oneCourtOrdersData,
    });

    const insights = await CourtOrdersV1Insights(oneCourtOrdersData.userUuid);

    expect(insights).toEqual([
      {
        birdColour: "purple",
        date: "May 2023",
        description: "You have 1 court order on your credit report.",
        title: "Court Orders Found",
      },
    ]);
  });

  it("should return court orders insights when multiple are present", async () => {
    prisma.creditreport_court_orders_v1.findFirst.mockResolvedValue({
      json: twoCourtOrdersData,
    });

    const insights = await CourtOrdersV1Insights(twoCourtOrdersData.userUuid);

    expect(insights).toEqual([
      {
        birdColour: "purple",
        date: "May 2023",
        description: "You have 2 court orders on your credit report.",
        title: "Court Orders Found",
      },
    ]);
  });

  it("should return an empty array of insights when there are no court orders", async () => {
    prisma.creditreport_court_orders_v1.findFirst.mockResolvedValue({
      json: noCourtOrdersData,
    });

    const insights = await CourtOrdersV1Insights(noCourtOrdersData.userUuid);

    expect(insights).toEqual([]);
  });

  it("should throw an error when no court orders data is found", async () => {
    prisma.creditreport_court_orders_v1.findFirst.mockResolvedValue(null);

    await expect(
      CourtOrdersV1Insights(noCourtOrdersData.userUuid)
    ).rejects.toThrow("No Court Orders found.");
  });

  it("should throw an error when court orders JSON data is invalid", async () => {
    prisma.creditreport_court_orders_v1.findFirst.mockResolvedValue(
      invalidCourtOrdersData
    );

    await expect(
      CourtOrdersV1Insights(invalidCourtOrdersData.userUuid)
    ).rejects.toThrow("Invalid or missing court orders JSON data.");
  });
});

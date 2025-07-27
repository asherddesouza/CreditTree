import FraudWarningsV1Insights from "../src/creditreport-fraud-warnings-v1-insights";
import { expect, vi } from "vitest";
import prisma from "../../../../libs/__mocks__/prisma";

vi.mock("../../../../libs/prisma.ts");

const noFraudWarningsData = {
  bureau: "EQUIFAX",
  market: "UK",
  reportId: "42602713",
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
  fraudWarnings: [],
  reportTimestamp: 1683333295777,
};

const oneFraudWarningData = {
  bureau: "EQUIFAX",
  market: "UK",
  reportId: "40354758",
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
  fraudWarnings: [
    {
      caseId: "caseId1234",
      supplier: "Supplying Member Name",
      addressId: "12345220",
      fraudDate: 1463616000000,
      caseNumber: "caseNum1234",
      classification: {
        category: "ApplicationFraud",
        originalCode: "GB/EFX/AFR",
      },
      applicationDate: 1461024000000,
      personalDetailsId: "Q/afE0pGsXwAV/L9XGab0jB9eeX4mJj12x5kzLK6S5A=",
    },
  ],
  reportTimestamp: 1675229403999,
};

const twoFraudWarningsData = {
  bureau: "EQUIFAX",
  market: "UK",
  reportId: "40354758",
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
  fraudWarnings: [
    {
      caseId: "caseId1234",
      supplier: "Supplying Member Name",
      addressId: "12345220",
      fraudDate: 1463616000000,
      caseNumber: "caseNum1234",
      classification: {
        category: "ApplicationFraud",
        originalCode: "GB/EFX/AFR",
      },
      applicationDate: 1461024000000,
      personalDetailsId: "Q/afE0pGsXwAV/L9XGab0jB9eeX4mJj12x5kzLK6S5A=",
    },
    {
      caseId: "caseId4567",
      supplier: "Supplying Member Name",
      addressId: "12345220",
      fraudDate: 1463616000000,
      caseNumber: "caseNum1234",
      classification: {
        category: "ApplicationFraud",
        originalCode: "GB/EFX/AFR",
      },
      applicationDate: 1476835200000,
      personalDetailsId: "Q/afE0pGsXwAV/L9XGab0jB9eeX4mJj12x5kzLK6S5A=",
    },
  ],
  reportTimestamp: 1675229403999,
};

const invalidFraudWarningsData = {
  bureau: "EQUIFAX",
  market: "UK",
  reportId: "42602713",
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
  fraudWarnings: { warning1: "something", warning2: "something else" },
  reportTimestamp: 1683333295777,
};

describe("FraudWarningsV1Insights Tests", () => {
  it("should return fraud warning insights when present", async () => {
    prisma.creditreport_fraud_warnings_v1.findFirst.mockResolvedValue({
      json: oneFraudWarningData,
    });

    const insights = await FraudWarningsV1Insights(
      oneFraudWarningData.userUuid
    );

    expect(insights).toEqual([
      {
        birdColour: "blue",
        date: "Feb 2023",
        description:
          "You have 1 fraud warning on your credit report. These are indicators that you might be at risk of identity theft or fraud, prompting lenders to take extra steps to verify your identity before granting credit.",
        title: "Fraud Warnings Found",
      },
    ]);
  });

  it("should return fraud warning insights when multiple are present", async () => {
    prisma.creditreport_fraud_warnings_v1.findFirst.mockResolvedValue({
      json: twoFraudWarningsData,
    });

    const insights = await FraudWarningsV1Insights(
      twoFraudWarningsData.userUuid
    );

    expect(insights).toEqual([
      {
        birdColour: "blue",
        date: "Feb 2023",
        description:
          "You have 2 fraud warnings on your credit report. These are indicators that you might be at risk of identity theft or fraud, prompting lenders to take extra steps to verify your identity before granting credit.",
        title: "Fraud Warnings Found",
      },
    ]);
  });

  it("should return an empty array of insights when there are no fraud warnings", async () => {
    prisma.creditreport_fraud_warnings_v1.findFirst.mockResolvedValue({
      json: noFraudWarningsData,
    });

    const insights = await FraudWarningsV1Insights(
      noFraudWarningsData.userUuid
    );

    expect(insights).toEqual([]);
  });

  it("should throw an error when no fraud warnings data is found", async () => {
    prisma.creditreport_fraud_warnings_v1.findFirst.mockResolvedValue(null);

    await expect(
      FraudWarningsV1Insights(noFraudWarningsData.userUuid)
    ).rejects.toThrow("No Fraud Warnings found.");
  });

  it("should throw an error when fraud warnings JSON data is invalid", async () => {
    prisma.creditreport_fraud_warnings_v1.findFirst.mockResolvedValue(
      invalidFraudWarningsData
    );

    await expect(
      FraudWarningsV1Insights(invalidFraudWarningsData.userUuid)
    ).rejects.toThrow("Invalid or missing fraud warnings JSON data.");
  });
});

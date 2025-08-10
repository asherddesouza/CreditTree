import InsolvenciesV1Insights from "../src/creditreport-insolvencies-v1-insights";
import { expect, vi } from "vitest";
import prisma from "../../../../libs/__mocks__/prisma";

vi.mock("../../../../libs/prisma.ts");

const noInsolvenciesData = {
  bureau: "EQUIFAX",
  market: "UK",
  reportId: "42602713",
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
  insolvencies: [],
  reportTimestamp: 1683333295777,
};

const oneInsolvencyData = {
  bureau: "EQUIFAX",
  market: "UK",
  reportId: "41308967",
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
  insolvencies: [
    {
      amount: {
        value: 4,
        currency: "GBP",
        decimals: 2,
      },
      caseId: "20208465",
      addressId: "12345214",
      courtName: "COUNTY COURT, DURHAM",
      startDate: 1461024000000,
      satisfiedDate: 1445212800000,
      classification: {
        category: "SecuredLoan",
        description: "BillOfSaleSatisfied",
        originalCode: "GB/EFX/BSS",
      },
      personalDetailsId: "Q/afE0pGsXwAV/L9XGab0jB9eeX4mJj12x5kzLK6S5A=",
    },
  ],
  reportTimestamp: 1676868983364,
};

const twoInsolvenciesData = {
  bureau: "EQUIFAX",
  market: "UK",
  reportId: "41308967",
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
  insolvencies: [
    {
      amount: {
        value: 4,
        currency: "GBP",
        decimals: 2,
      },
      caseId: "20208465",
      addressId: "12345214",
      courtName: "COUNTY COURT, DURHAM",
      startDate: 1461024000000,
      satisfiedDate: 1445212800000,
      classification: {
        category: "SecuredLoan",
        description: "BillOfSaleSatisfied",
        originalCode: "GB/EFX/BSS",
      },
      personalDetailsId: "Q/afE0pGsXwAV/L9XGab0jB9eeX4mJj12x5kzLK6S5A=",
    },
    {
      amount: {
        value: 5,
        currency: "GBP",
        decimals: 2,
      },
      caseId: "20208465",
      addressId: "12345214",
      courtName: "COUNTY COURT, DURHAM",
      startDate: 1461024000000,
      satisfiedDate: 1445212800000,
      classification: {
        category: "SecuredLoan",
        description: "BillOfSaleSatisfied",
        originalCode: "GB/EFX/BSS",
      },
      personalDetailsId: "Q/afE0pGsXwAV/L9XGab0jB9eeX4mJj12x5kzLK6S5A=",
    },
  ],
  reportTimestamp: 1676868983364,
};

const invalidInsolvenciesData = {
  bureau: "EQUIFAX",
  market: "UK",
  reportId: "42602713",
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
  insolvencies: { insolvency1: "bankruptcy", insolvency2: "bankruptcy again" },
  reportTimestamp: 1683333295777,
};

describe("InsolvenciesV1Insights Tests", () => {
  it("should return insolvencies insights when present", async () => {
    prisma.creditreport_insolvencies_v1.findFirst.mockResolvedValue({
      json: oneInsolvencyData,
    });

    const insights = await InsolvenciesV1Insights(oneInsolvencyData.userUuid);

    expect(insights).toEqual([
      {
        birdColour: "purple",
        date: "Feb 2023",
        description:
          "You have 1 insolvency on your credit report. This will stay on your credit report for 6 years and can significantly impact your credit score.",
        title: "Insolvencies Found",
      },
    ]);
  });

  it("should return insolvencies insights when multiple are present", async () => {
    prisma.creditreport_insolvencies_v1.findFirst.mockResolvedValue({
      json: twoInsolvenciesData,
    });

    const insights = await InsolvenciesV1Insights(twoInsolvenciesData.userUuid);

    expect(insights).toEqual([
      {
        birdColour: "purple",
        date: "Feb 2023",
        description:
          "You have 2 insolvencies on your credit report. This will stay on your credit report for 6 years and can significantly impact your credit score.",
        title: "Insolvencies Found",
      },
    ]);
  });

  it("should return an empty array of insights when there are no insolvencies", async () => {
    prisma.creditreport_insolvencies_v1.findFirst.mockResolvedValue({
      json: noInsolvenciesData,
    });

    const insights = await InsolvenciesV1Insights(noInsolvenciesData.userUuid);

    expect(insights).toEqual([]);
  });

  it("should throw an error when no insolvencies data is found", async () => {
    prisma.creditreport_insolvencies_v1.findFirst.mockResolvedValue(null);

    await expect(
      InsolvenciesV1Insights(noInsolvenciesData.userUuid)
    ).rejects.toThrow("No Insolvencies found.");
  });

  it("should throw an error when insolvencies JSON data is invalid", async () => {
    prisma.creditreport_insolvencies_v1.findFirst.mockResolvedValue(
      invalidInsolvenciesData
    );

    await expect(
      InsolvenciesV1Insights(invalidInsolvenciesData.userUuid)
    ).rejects.toThrow("Invalid or missing insolvencies JSON data.");
  });
});

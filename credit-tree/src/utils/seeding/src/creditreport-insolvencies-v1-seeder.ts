"use server";

import prisma from "../../../../libs/prisma";

type ScenarioKey = "noInsolvencies" | "oneInsolvency" | "twoInsolvencies";

export async function generateJsonData(uuid: string) {
  const jsonData = {
    noInsolvencies: {
      bureau: "EQUIFAX",
      market: "UK",
      reportId: "41308967",
      userUuid: uuid,
      insolvencies: [],
      reportTimestamp: 1676868983658,
    },
    oneInsolvency: {
      bureau: "EQUIFAX",
      market: "UK",
      reportId: "41308967",
      userUuid: uuid,
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
    },
    twoInsolvencies: {
      bureau: "EQUIFAX",
      market: "UK",
      reportId: "41308967",
      userUuid: uuid,
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
    },
  };

  const scenarios = Object.keys(jsonData) as ScenarioKey[];
  const randomKey = scenarios[Math.floor(Math.random() * scenarios.length)];

  return jsonData[randomKey];
}

export default async function InsolvenciesV1Seeder(
  uuid: string,
  jsonData: Record<string, any> = {}
) {
  try {
    await prisma.creditreport_insolvencies_v1.create({
      data: {
        id: uuid,
        bureau: "EQUIFAX",
        json: jsonData,
      },
    });
  } catch (error) {
    console.error("Error in InsolvenciesV1Seeder:", error);
  }

  return uuid;
}

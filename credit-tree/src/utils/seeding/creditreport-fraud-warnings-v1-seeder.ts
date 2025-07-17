"use server";

import prisma from "@/app/prisma";

type ScenarioKey = "noFraudCases" | "oneFraudCase" | "twoFraudCases";

export async function generateJsonData(uuid: string) {
  const jsonData = {
    noFraudCases: {
      bureau: "EQUIFAX",
      market: "UK",
      reportId: "40354758",
      userUuid: uuid,
      fraudWarnings: null,
      reportTimestamp: 1675229403342,
    },
    oneFraudCase: {
      bureau: "EQUIFAX",
      market: "UK",
      reportId: "40354758",
      userUuid: uuid,
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
    },
    twoFraudCases: {
      bureau: "EQUIFAX",
      market: "UK",
      reportId: "40354758",
      userUuid: uuid,
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
      reportTimestamp: 1675229403897,
    },
  };

  const scenarios = Object.keys(jsonData) as ScenarioKey[];
  const randomKey = scenarios[Math.floor(Math.random() * scenarios.length)];

  return jsonData[randomKey];
}

export default async function FraudWarningsV1Seeder(
  uuid: string,
  jsonData: Record<string, any> = {}
) {
  try {
    await prisma.creditreport_fraud_warnings_v1.create({
      data: {
        id: uuid,
        bureau: "EQUIFAX",
        json: jsonData,
      },
    });
  } catch (error) {
    console.error("Error in FraudWarningsV1Seeder:", error);
  }

  return uuid;
}

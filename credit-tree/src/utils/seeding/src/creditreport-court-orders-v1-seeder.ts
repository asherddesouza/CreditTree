"use server";

import { createClient } from "@/utils/supabase/server";
import prisma from "../../../../libs/prisma";

type ScenarioKey = "noCourtOrders" | "oneCourtOrder" | "multipleCourtOrders";

export async function generateJsonData(uuid: string) {
  const jsonData = {
    noCourtOrders: {
      bureau: "EQUIFAX",
      market: "UK",
      reportId: "42602713",
      userUuid: uuid,
      courtOrders: null,
      reportTimestamp: 1683333295777,
    },
    oneCourtOrder: {
      bureau: "EQUIFAX",
      market: "UK",
      reportId: "42602713",
      userUuid: uuid,
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
    },
    multipleCourtOrders: {
      bureau: "EQUIFAX",
      market: "UK",
      reportId: "42602713",
      userUuid: uuid,
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
    },
  };

  const scenarios = Object.keys(jsonData) as ScenarioKey[];
  const randomKey = scenarios[Math.floor(Math.random() * scenarios.length)];

  return jsonData[randomKey];
}

export default async function CourtOrdersV1Seeder(
  uuid: string,
  jsonData: Record<string, any> = {}
) {
  try {
    await prisma.creditreport_court_orders_v1.create({
      data: {
        id: uuid,
        bureau: "EQUIFAX",
        json: jsonData,
      },
    });
  } catch (error) {
    console.error("Error in CourtOrdersV1Seeder:", error);
  }

  return uuid;
}

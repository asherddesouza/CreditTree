"use server";

import { createClient } from "@/utils/supabase/server";
import prisma from "@/app/prisma";

type ScenarioKey = "noCourtOrders" | "oneCourtOrder" | "multipleCourtOrders";

function generateJsonData(uuid: string) {
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

export default async function CourtOrdersV1Seeder() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    console.log("Error fetching user data:", error);
  } else {
    const user = await prisma.user_data.findUnique({
      where: { id: data.user.id },
    });

    const jsonData = generateJsonData(user?.id || "");

    // console.log("Generated JSON Data:", jsonData);

    const seedingData = await prisma.creditreport_court_orders_v1.create({
      data: {
        id: user?.id || "",
        bureau: "EQUIFAX",
        json: jsonData,
      },
    });

    // console.log(JSON.stringify(jsonData));
  }
}

// Mock up some JSON for the specific scenarios, map them to an indexed object, random access of indexes,
// then on sign up trigger off a server action which inserts the JSONs to your DB alongside the newly generated user UUID

"use server";

import { createClient } from "@/utils/supabase/server";
import prisma from "@/app/prisma";

type ScenarioKey = "noInsolvencies" | "oneInsolvency";

function generateJsonData(uuid: string) {
  const jsonData = {
    noInsolvencies: {
      bureau: "EQUIFAX",
      market: "UK",
      reportId: "41308967",
      userUuid: uuid,
      insolvencies: null,
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
  };

  const scenarios = Object.keys(jsonData) as ScenarioKey[];
  const randomKey = scenarios[Math.floor(Math.random() * scenarios.length)];

  return jsonData[randomKey];
}

export default async function InsolvenciesV1Seeder() {
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

    const seedingData = await prisma.creditreport_insolvencies_v1.create({
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

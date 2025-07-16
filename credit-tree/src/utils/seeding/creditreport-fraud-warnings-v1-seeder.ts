"use server";

import { createClient } from "@/utils/supabase/server";
import prisma from "@/app/prisma";

type ScenarioKey = "noFraudCases" | "oneFraudCase" | "twoFraudCases";

function generateJsonData(uuid: string) {
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

export default async function FraudWarningsV1Seeder() {
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

    const seedingData = await prisma.creditreport_fraud_warnings_v1.create({
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

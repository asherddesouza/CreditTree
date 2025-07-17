"use server";

import prisma from "@/app/prisma";

type ScenarioKey = "recentlyMoved" | "noElectoralRoll" | "onElectoralRoll";

export async function generateJsonData(uuid: string) {
  const jsonData = {
    recentlyMoved: {
      bureau: "EQUIFAX",
      reportId: "40557458",
      userUuid: uuid,
      reportTimestamp: 1675743385917,
      electoralRollData: [
        {
          addressId: "12345220",
          personalDetailsId: "Q/afE0pGsXwAV/L9XGab0jB9eeX4mJj12x5kzLK6S5A=",
          annualRegisterPeriod: {
            end: null,
            start: 2025,
          },
        },
        {
          addressId: "12345214",
          personalDetailsId: "Q/afE0pGsXwAV/L9XGab0jB9eeX4mJj12x5kzLK6S5A=",
          annualRegisterPeriod: {
            end: 2025,
            start: 2006,
          },
        },
      ],
    },
    noElectoralRoll: {
      bureau: "EQUIFAX",
      reportId: "40557458",
      userUuid: uuid,
      reportTimestamp: 1675743385435,
      electoralRollData: null,
    },
    onElectoralRoll: {
      bureau: "EQUIFAX",
      reportId: "40557458",
      userUuid: uuid,
      reportTimestamp: 1675743385431,
      electoralRollData: [
        {
          addressId: "12345220",
          personalDetailsId: "Q/afE0pGsXwAV/L9XGab0jB9eeX4mJj12x5kzLK6S5A=",
          annualRegisterPeriod: {
            end: null,
            start: 2023,
          },
        },
        {
          addressId: "12345214",
          personalDetailsId: "Q/afE0pGsXwAV/L9XGab0jB9eeX4mJj12x5kzLK6S5A=",
          annualRegisterPeriod: {
            end: 2023,
            start: 2006,
          },
        },
      ],
    },
  };

  const scenarios = Object.keys(jsonData) as ScenarioKey[];
  const randomKey = scenarios[Math.floor(Math.random() * scenarios.length)];

  return jsonData[randomKey];
}

export default async function ElectoralRollV1Seeder(
  uuid: string,
  jsonData: Record<string, any> = {}
) {
  try {
    await prisma.creditreport_electoral_roll_v1.create({
      data: {
        id: uuid,
        bureau: "EQUIFAX",
        json: jsonData,
      },
    });
  } catch (error) {
    console.error("Error in ElectoralRollV1Seeder:", error);
  }

  return uuid;
}

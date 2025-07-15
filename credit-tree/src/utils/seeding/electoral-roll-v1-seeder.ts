"use server";

import { createClient } from "@/utils/supabase/server";
import prisma from "@/app/prisma";

type ScenarioKey = "recentlyMoved" | "noElectoralRoll" | "onElectoralRoll";

function generateJsonData(uuid: string) {
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

export default async function ElectoralRollV1Seeder() {
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

    const seedingData = await prisma.creditreport_electoral_roll_v1.create({
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

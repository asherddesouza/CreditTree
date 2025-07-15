"use server";

import { createClient } from "@/utils/supabase/server";
import prisma from "@/app/prisma";

function generateJsonData(uuid: string, fullName: string) {
  return {
    bureau: "EQUIFAX",
    market: "UK",
    reportId: "43527936",
    userUuid: uuid,
    personalDetails: {
      aliases: [
        {
          id: "WARM2+x5iB9iwtZh/OdwrXyfPT2WgWOETVh1z02tn7k=",
          alias: {
            name: fullName,
            dateOfBirth: -520819200000,
          },
        },
      ],
      entries: [
        {
          id: "Q/afE0pGsXwAV/L9XGab0jB9eeX4mJj12x5kzLK6S5A=",
          details: {
            name: fullName,
            dateOfBirth: -518140800000,
          },
        },
      ],
    },
    reportTimestamp: 1690002181585,
  };
}

export default async function PersonalDetailsV1Seeder() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    console.log("Error fetching user data:", error);
  } else {
    const user = await prisma.user_data.findUnique({
      where: { id: data.user.id },
    });

    const jsonData = generateJsonData(user?.id || "", user?.name || "");

    const seedingData = await prisma.creditreport_personal_details_v1.create({
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

"use server";

import { createClient } from "@/utils/supabase/server";
import prisma from "@/app/prisma";

type ScenarioKey = "oneAddress" | "oneAddress";

function generateJsonData(uuid: string) {
  const jsonData = {
    oneAddress: {
      bureau: "EQUIFAX",
      market: "UK",
      reportId: "43513505",
      userUuid: uuid,
      addresses: [
        {
          id: "12345220",
          format: "GB/EFX/V1",
          address: {
            city: null,
            town: "LONDON",
            lines: null,
            state: null,
            county: null,
            street: "FRIAR ROAD",
            postcode: "SE22 0SE",
            flatNumber: null,
            buildingName: "15C",
            buildingNumber: null,
          },
          current: true,
          supplied: true,
        },
      ],
      reportTimestamp: 1689998518235,
    },
    multipleAddresses: {
      bureau: "EQUIFAX",
      market: "UK",
      reportId: "43513505",
      userUuid: uuid,
      addresses: [
        {
          id: "12345220",
          format: "GB/EFX/V1",
          address: {
            city: null,
            town: "LONDON",
            lines: null,
            state: null,
            county: null,
            street: "FRIAR ROAD",
            postcode: "SE22 0SE",
            flatNumber: null,
            buildingName: "15C",
            buildingNumber: null,
          },
          current: true,
          supplied: true,
        },
        {
          id: "12345214",
          format: "GB/EFX/V1",
          address: {
            city: null,
            town: "COUNTY DURHAM",
            lines: null,
            state: null,
            county: null,
            street: "HIGH STREET, SEDGEFIELD",
            postcode: "TS21 4DT",
            flatNumber: null,
            buildingName: "124",
            buildingNumber: null,
          },
          current: false,
          supplied: true,
        },
      ],
      reportTimestamp: 1689998518879,
    },
  };

  const scenarios = Object.keys(jsonData) as ScenarioKey[];
  const randomKey = scenarios[Math.floor(Math.random() * scenarios.length)];

  return jsonData[randomKey];
}

export default async function AddressesV1Seeder() {
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

    const seedingData = await prisma.creditreport_addresses_v1.create({
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

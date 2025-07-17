"use server";

import prisma from "@/app/prisma";

type ScenarioKey = "oneAddress" | "multipleAddresses";

export async function generateJsonData(uuid: string) {
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

export default async function AddressesV1Seeder(
  uuid: string,
  jsonData: Record<string, any> = {}
) {
  try {
    await prisma.creditreport_addresses_v1.create({
      data: {
        id: uuid,
        bureau: "EQUIFAX",
        json: jsonData,
      },
    });
  } catch (error) {
    console.error("Error in AddressesV1Seeder:", error);
  }

  return uuid;
}

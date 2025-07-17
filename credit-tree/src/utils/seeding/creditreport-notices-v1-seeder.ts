"use server";

import prisma from "@/app/prisma";

type ScenarioKey = "noNotices" | "someNotices" | "manyNotices";

export async function generateJsonData(uuid: string) {
  const jsonData = {
    noNotices: {
      bureau: "EQUIFAX",
      market: "UK",
      notices: [],
      reportId: "38564246",
      userUuid: uuid,
      reportTimestamp: 1671775416574,
    },
    someNotices: {
      bureau: "EQUIFAX",
      market: "UK",
      notices: [
        {
          addressId: "12345220",
          dateRaised: 1466294400000,
          noticeText: "Here's a notice of correction!",
          classification: {
            category: "NoticeOfCorrection",
            originalCode: "GB/EFX/9",
          },
          personalDetailsId: "LwnL9kgOis9jUGsQLyaACGs39alIaDb7wT52uzBY7rQ",
        },
        {
          addressId: "12345220",
          dateRaised: 1466294400000,
          noticeText: "Here's a notice of dispute!",
          classification: {
            category: "NoticeOfDispute",
            originalCode: "GB/EFX/A",
          },
          personalDetailsId: "LwnL9kgOis9jUGsQLyaACGs39alIaDb7wT52uzBY7rQ",
        },
      ],
      reportId: "38564246",
      userUuid: uuid,
      reportTimestamp: 1671775416574,
    },
    manyNotices: {
      bureau: "EQUIFAX",
      market: "UK",
      notices: [
        {
          addressId: "12345220",
          dateRaised: 1466294400000,
          noticeText: "Here's a notice of correction!",
          classification: {
            category: "NoticeOfCorrection",
            originalCode: "GB/EFX/9",
          },
          personalDetailsId: "LwnL9kgOis9jUGsQLyaACGs39alIaDb7wT52uzBY7rQ",
        },
        {
          addressId: "12345220",
          dateRaised: 1466294400000,
          noticeText: "Here's a notice of dispute!",
          classification: {
            category: "NoticeOfDispute",
            originalCode: "GB/EFX/A",
          },
          personalDetailsId: "LwnL9kgOis9jUGsQLyaACGs39alIaDb7wT52uzBY7rQ",
        },
        {
          addressId: "12345220",
          dateRaised: 1476835200000,
          noticeText: "Here's another notice of correction!",
          classification: {
            category: "NoticeOfCorrection",
            originalCode: "GB/EFX/9",
          },
          personalDetailsId: "LwnL9kgOis9jUGsQLyaACGs39alIaDb7wT52uzBY7rQ",
        },
        {
          addressId: "12345220",
          dateRaised: 1476835200000,
          noticeText: "Here's another notice of dispute!",
          classification: {
            category: "NoticeOfDispute",
            originalCode: "GB/EFX/A",
          },
          personalDetailsId: "LwnL9kgOis9jUGsQLyaACGs39alIaDb7wT52uzBY7rQ",
        },
      ],
      reportId: "38564246",
      userUuid: uuid,
      reportTimestamp: 1671775416297,
    },
  };

  const scenarios = Object.keys(jsonData) as ScenarioKey[];
  const randomKey = scenarios[Math.floor(Math.random() * scenarios.length)];

  return jsonData[randomKey];
}

export default async function NoticesV1Seeder(
  uuid: string,
  jsonData: Record<string, any> = {}
) {
  try {
    await prisma.creditreport_notices_v1.create({
      data: {
        id: uuid,
        bureau: "EQUIFAX",
        json: jsonData,
      },
    });
  } catch (error) {
    console.error("Error in NoticesV1Seeder:", error);
  }

  return uuid;
}

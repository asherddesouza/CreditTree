"use server";

import { createClient } from "@/utils/supabase/server";
import prisma from "@/app/prisma";

type ScenarioKey = "noNotices" | "someNotices" | "manyNotices";

function generateJsonData(uuid: string) {
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

export default async function NoticesV1Seeder() {
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

    const seedingData = await prisma.creditreport_notices_v1.create({
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

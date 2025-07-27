"use server";

import prisma from "../../../../libs/prisma";

type ScenarioKey = "noInsights" | "insightsSet1" | "insightsSet2";

export async function generateJsonData(uuid: string) {
  const jsonData = {
    noInsights: {
      month: "2025-07-01T00:00:00Z",
      userUuid: uuid,
      rankedInsights: [],
    },
    insightsSet1: {
      month: "2025-07-01T00:00:00Z",
      userUuid: uuid,
      rankedInsights: [
        {
          meta: {
            impact: "Medium",
            sources: ["SpyCloud"],
            polarity: "Negative",
            insightId: "06f5d2b0-1cee-4a70-91ad-e60a1d68914a",
            actionable: null,
            categories: ["Stolen Password", "DarkWeb"],
            changeType: "Unknown",
            cardinality: "Many",
            fromTimestamp: 1752612925636,
            insightTypeName: "password-breach",
            deduplicationKey: "06f5d2b0-1cee-4a70-91ad-e60a1d68914a",
            throughTimestamp: null,
            updatedTimestamp: 1752612925636,
          },
          rank: 35,
          details: {
            details: {
              count: 1,
              breachIds: ["SpyCloud-1"],
              breachDate: 18993,
              breachDomains: ["MySpace"],
              maskedPassword: "passwo***23",
            },
          },
        },
        {
          meta: {
            impact: "Medium",
            sources: ["Hibp"],
            polarity: "Negative",
            insightId: "2ab60ea9-20c2-41e1-85a7-27d0fb9eca19",
            actionable: null,
            categories: ["Email Breach", "DarkWeb"],
            changeType: "Unknown",
            cardinality: "Many",
            fromTimestamp: 1752612925737,
            insightTypeName: "email-data-breach",
            deduplicationKey: "2ab60ea9-20c2-41e1-85a7-27d0fb9eca19",
            throughTimestamp: null,
            updatedTimestamp: 1752612925737,
          },
          rank: 37,
          details: {
            details: {
              email: "test-user-1752612922358@clrscr.uk",
              title: "Adobe",
              breachDate: 15982,
              maskedPassword: null,
            },
          },
        },
      ],
    },
    insightsSet2: {
      month: "2025-06-01T00:00:00Z",
      userUuid: uuid,
      rankedInsights: [
        {
          meta: {
            impact: "Medium",
            sources: ["Hibp"],
            polarity: "Negative",
            insightId: "2ab60ea9-20c2-41e1-85a7-27d0fb9eca19",
            actionable: null,
            categories: ["Email Breach", "DarkWeb"],
            changeType: "Unknown",
            cardinality: "Many",
            fromTimestamp: 1752612925737,
            insightTypeName: "email-data-breach",
            deduplicationKey: "2ab60ea9-20c2-41e1-85a7-27d0fb9eca19",
            throughTimestamp: null,
            updatedTimestamp: 1752612925737,
          },
          rank: 37,
          details: {
            details: {
              email: "test-user-1752612922358@clrscr.uk",
              title: "Adobe",
              breachDate: 15982,
              maskedPassword: null,
            },
          },
        },
        {
          meta: {
            impact: "Medium",
            sources: ["CreditReport", "EQUIFAX"],
            polarity: "Negative",
            insightId: "b4d396cf-34e0-4b91-b14f-106ca3c45e46",
            actionable: false,
            categories: ["CreditReport", "Change"],
            changeType: "NotApplicable",
            cardinality: "Many",
            fromTimestamp: 1719717032123,
            insightTypeName: "hard-search-added",
            deduplicationKey: null,
            throughTimestamp: 1722309032123,
            updatedTimestamp: 1719717032123,
          },
          rank: 101,
          details: {
            change: {
              clientName: "KINTO ONE UK LTD(TOYOTA FS) - IC",
              searchDate: 19893,
              searchType: "CreditApplication",
            },
          },
        },
      ],
    },
  };

  const scenarios = Object.keys(jsonData) as ScenarioKey[];
  const randomKey = scenarios[Math.floor(Math.random() * scenarios.length)];

  return jsonData[randomKey];
}

export default async function RankedInsightsByMonthV1Seeder(
  uuid: string,
  jsonData: Record<string, any> = {}
) {
  try {
    await prisma.creditreport_ranked_insights_by_month_v1.create({
      data: {
        id: uuid,
        bureau: "EQUIFAX",
        json: jsonData,
      },
    });
  } catch (error) {
    console.error("Error in RankedInsightsByMonthV1Seeder:", error);
  }

  return uuid;
}

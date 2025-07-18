"use server";

import prisma from "../../../../libs/prisma";

type ScenarioKey = "noInsights" | "insightsSet1" | "insightsSet2";

export async function generateJsonData(uuid: string) {
  const jsonData = {
    noInsights: { month: 19905, userUuid: uuid, rankedInsights: [] },
    insightsSet1: {
      month: 20270,
      userUuid: uuid,
      rankedInsights: [
        {
          meta: {
            impact: "Medium",
            sources: ["SpyCloud"],
            polarity: "Negative",
            insightId: "1de58547-2136-4fa1-bf44-d9521fd5c491",
            actionable: null,
            categories: ["Stolen Password", "DarkWeb"],
            changeType: "Unknown",
            cardinality: "Many",
            fromTimestamp: 1752612925636,
            insightTypeName: "password-breach",
            deduplicationKey: "1de58547-2136-4fa1-bf44-d9521fd5c491",
            throughTimestamp: null,
            updatedTimestamp: 1752612925636,
          },
          rank: 35,
          details: {
            details: {
              count: 1,
              breachIds: ["SpyCloud-2"],
              breachDate: 18994,
              breachDomains: ["LinkedIn"],
              maskedPassword: "passwo***56",
            },
          },
        },
        {
          meta: {
            impact: "Medium",
            sources: ["SpyCloud"],
            polarity: "Negative",
            insightId: "2e47ed37-9440-4535-8804-af6a40b6e412",
            actionable: null,
            categories: ["Email Breach", "DarkWeb"],
            changeType: "Unknown",
            cardinality: "Many",
            fromTimestamp: 1752612925636,
            insightTypeName: "email-data-breach",
            deduplicationKey: "2e47ed37-9440-4535-8804-af6a40b6e412",
            throughTimestamp: null,
            updatedTimestamp: 1752612925636,
          },
          rank: 37,
          details: {
            details: {
              email: "jane.passport@example.com",
              title: "Sensitive Source",
              breachDate: 18994,
              maskedPassword: null,
            },
          },
        },
        {
          meta: {
            impact: "Medium",
            sources: ["Hibp"],
            polarity: "Negative",
            insightId: "c7fd9621-5eae-42c0-966f-84394493183d",
            actionable: null,
            categories: ["Email Breach", "DarkWeb"],
            changeType: "Unknown",
            cardinality: "Many",
            fromTimestamp: 1752612925737,
            insightTypeName: "email-data-breach",
            deduplicationKey: "c7fd9621-5eae-42c0-966f-84394493183d",
            throughTimestamp: null,
            updatedTimestamp: 1752612925737,
          },
          rank: 37,
          details: {
            details: {
              email: "test-user-1752612922358@clrscr.uk",
              title: "Stratfor",
              breachDate: 15332,
              maskedPassword: null,
            },
          },
        },
        {
          meta: {
            impact: "Medium",
            sources: ["SpyCloud"],
            polarity: "Negative",
            insightId: "c45ba5de-984e-4fca-996e-6029cbe57fee",
            actionable: null,
            categories: ["Email Breach", "DarkWeb"],
            changeType: "Unknown",
            cardinality: "Many",
            fromTimestamp: 1752612925636,
            insightTypeName: "email-data-breach",
            deduplicationKey: "c45ba5de-984e-4fca-996e-6029cbe57fee",
            throughTimestamp: null,
            updatedTimestamp: 1752612925636,
          },
          rank: 37,
          details: {
            details: {
              email: "john.doe@example.com",
              title: "MySpace",
              breachDate: 18993,
              maskedPassword: "passwo***23",
            },
          },
        },
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
            insightId: "a7dd0c7a-0079-4a77-b205-0420bb529f87",
            actionable: null,
            categories: ["Email Breach", "DarkWeb"],
            changeType: "Unknown",
            cardinality: "Many",
            fromTimestamp: 1752612925737,
            insightTypeName: "email-data-breach",
            deduplicationKey: "a7dd0c7a-0079-4a77-b205-0420bb529f87",
            throughTimestamp: null,
            updatedTimestamp: 1752612925737,
          },
          rank: 37,
          details: {
            details: {
              email: "test-user-1752612922358@clrscr.uk",
              title: "Gawker",
              breachDate: 14954,
              maskedPassword: null,
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
        {
          meta: {
            impact: "Medium",
            sources: ["SpyCloud"],
            polarity: "Negative",
            insightId: "4a5c2459-257f-4f49-a70f-d41384d3456b",
            actionable: null,
            categories: ["Email Breach", "DarkWeb"],
            changeType: "Unknown",
            cardinality: "Many",
            fromTimestamp: 1752612925636,
            insightTypeName: "email-data-breach",
            deduplicationKey: "4a5c2459-257f-4f49-a70f-d41384d3456b",
            throughTimestamp: null,
            updatedTimestamp: 1752612925636,
          },
          rank: 37,
          details: {
            details: {
              email: "jane.smith@example.com",
              title: "LinkedIn",
              breachDate: 18994,
              maskedPassword: "passwo***56",
            },
          },
        },
      ],
    },
    insightsSet2: {
      month: 20240,
      userUuid: uuid,
      rankedInsights: [
        {
          meta: {
            impact: "Medium",
            sources: ["CreditReport", "EQUIFAX"],
            polarity: "Positive",
            insightId: "9fb13839-8cec-4a14-b0aa-2acb230ffca0",
            actionable: false,
            categories: ["CreditReport", "Change"],
            changeType: "NotApplicable",
            cardinality: "Many",
            fromTimestamp: 1750907708241,
            insightTypeName: "electoral-roll-updated",
            deduplicationKey: null,
            throughTimestamp: 1753499708241,
            updatedTimestamp: 1750907708241,
          },
          rank: 97,
          details: {
            change: {
              address: {
                id: "28030098341",
                format: "GB/EFX/V1",
                address: {
                  city: null,
                  town: "ELY",
                  lines: null,
                  state: null,
                  county: "CAMBS",
                  street: "IDVERIFIER ST",
                  postcode: "CB6 2AG",
                  flatNumber: null,
                  buildingName: null,
                  buildingNumber: "320",
                },
                current: true,
                supplied: true,
              },
              electoralRollPeriod: { end: 2024, start: 1983 },
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

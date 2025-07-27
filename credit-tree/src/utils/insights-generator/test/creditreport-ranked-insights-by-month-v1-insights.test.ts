import RankedInsightsByMonthV1Insights from "../src/creditreport-ranked-insights-by-month-v1-insights";
import { expect, vi } from "vitest";
import prisma from "../../../../libs/__mocks__/prisma";

vi.mock("../../../../libs/prisma.ts");

const noRankedInsightsByMonthData = {
  month: "2025-07-01T00:00:00Z",
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
  rankedInsights: [],
};

const rankedInsightsByMonthDataHardSearch = {
  month: "2025-07-01T00:00:00Z",
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
  rankedInsights: [
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
};

const rankedInsightsByMonthDataPasswordBreach = {
  month: "2025-07-01T00:00:00Z",
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
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
  ],
};

const rankedInsightsByMonthDataEmailBreach = {
  month: "2025-07-01T00:00:00Z",
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
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
          email: "user.email@domain.com",
          title: "Adobe",
          breachDate: 15982,
          maskedPassword: null,
        },
      },
    },
  ],
};

describe("RankedInsightsByMonthV1Insights Tests", () => {
  it("should return a hard search insight", async () => {
    prisma.creditreport_ranked_insights_by_month_v1.findFirst.mockResolvedValue(
      {
        json: rankedInsightsByMonthDataHardSearch,
      }
    );

    const insights = await RankedInsightsByMonthV1Insights(
      rankedInsightsByMonthDataHardSearch.userUuid
    );

    expect(insights).toEqual([
      {
        birdColour: "yellow",
        date: "Jul 2025",
        description:
          "A hard search typically stays on your credit report for up to 12 months. However, even though they are visible to lenders for a year, the impact on your score is most significant shortly after the check.",
        title: "You have a new hard search on your report!",
        infoCard: {
          iconUrl: "/resources/documents.png",
          name: "KINTO ONE UK LTD(TOYOTA FS) - IC",
          type: "Hard Search",
        },
      },
    ]);
  });

  it("should return a password breach insight", async () => {
    prisma.creditreport_ranked_insights_by_month_v1.findFirst.mockResolvedValue(
      {
        json: rankedInsightsByMonthDataPasswordBreach,
      }
    );

    const insights = await RankedInsightsByMonthV1Insights(
      rankedInsightsByMonthDataPasswordBreach.userUuid
    );

    expect(insights).toEqual([
      {
        birdColour: "purple",
        date: "Jul 2025",
        description:
          "A password from MySpace has been found in a data breach. Change your password immediately to protect your account.",
        title: "You have a new password breach on your report!",
        infoCard: {
          iconUrl: "/resources/documents.png",
          name: "passwo***23",
          type: "Password Breach",
        },
      },
    ]);
  });

  it("should return an email breach insight", async () => {
    prisma.creditreport_ranked_insights_by_month_v1.findFirst.mockResolvedValue(
      {
        json: rankedInsightsByMonthDataEmailBreach,
      }
    );

    const insights = await RankedInsightsByMonthV1Insights(
      rankedInsightsByMonthDataEmailBreach.userUuid
    );

    expect(insights).toEqual([
      {
        birdColour: "purple",
        date: "Jul 2025",
        description:
          "An email from Adobe has been found in a data breach. Change your email immediately to protect your account.",
        title: "You have a new email data breach on your report!",
        infoCard: {
          iconUrl: "/resources/documents.png",
          name: "user.email@domain.com",
          type: "Email Data Breach",
        },
      },
    ]);
  });
  it("should return a password breach insight", async () => {
    prisma.creditreport_ranked_insights_by_month_v1.findFirst.mockResolvedValue(
      {
        json: rankedInsightsByMonthDataPasswordBreach,
      }
    );

    const insights = await RankedInsightsByMonthV1Insights(
      rankedInsightsByMonthDataPasswordBreach.userUuid
    );

    expect(insights).toEqual([
      {
        birdColour: "purple",
        date: "Jul 2025",
        description:
          "A password from MySpace has been found in a data breach. Change your password immediately to protect your account.",
        title: "You have a new password breach on your report!",
        infoCard: {
          iconUrl: "/resources/documents.png",
          name: "passwo***23",
          type: "Password Breach",
        },
      },
    ]);
  });

  it("should return an empty array when a user has no ranked insights", async () => {
    prisma.creditreport_ranked_insights_by_month_v1.findFirst.mockResolvedValue(
      {
        json: noRankedInsightsByMonthData,
      }
    );

    const insights = await RankedInsightsByMonthV1Insights(
      noRankedInsightsByMonthData.userUuid
    );

    expect(insights).toEqual([]);
  });

  it("should throw an error when no ranked insights by month data is found", async () => {
    prisma.creditreport_ranked_insights_by_month_v1.findFirst.mockResolvedValue(
      null
    );

    await expect(
      RankedInsightsByMonthV1Insights(noRankedInsightsByMonthData.userUuid)
    ).rejects.toThrow("No Ranked Insights By Month found.");
  });

  it("should throw an error when ranked insights by month JSON data is invalid", async () => {
    prisma.creditreport_ranked_insights_by_month_v1.findFirst.mockResolvedValue(
      noRankedInsightsByMonthData
    );

    await expect(
      RankedInsightsByMonthV1Insights(noRankedInsightsByMonthData.userUuid)
    ).rejects.toThrow("Invalid or missing ranked insights by month JSON data.");
  });
});

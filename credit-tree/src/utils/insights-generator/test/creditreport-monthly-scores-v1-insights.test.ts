import MonthlyScoresV1Insights from "../src/creditreport-monthly-scores-v1-insights";
import { expect, vi } from "vitest";
import prisma from "../../../../libs/__mocks__/prisma";

vi.mock("../../../../libs/prisma.ts");

const noCreditScoreData = {
  label: "PSOLF01",
  bureau: "EQUIFAX",
  market: "UK",
  scores: [{ year: 2025, month: 7, score: null, change: null }],
  maxScore: 1000,
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
};

const positiveScoreChangeData = {
  label: "PSOLF01",
  bureau: "EQUIFAX",
  market: "UK",
  scores: [{ year: 2025, month: 7, score: 131, change: 31 }],
  maxScore: 1000,
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
};

const negativeScoreChangeData = {
  label: "PSOLF01",
  bureau: "EQUIFAX",
  market: "UK",
  scores: [{ year: 2025, month: 7, score: 342, change: -15 }],
  maxScore: 1000,
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
};

describe("MonthlyScoresV1Insights Tests", () => {
  it("should return a positive score change insight", async () => {
    prisma.creditreport_monthly_scores_v1.findFirst.mockResolvedValue({
      json: positiveScoreChangeData,
    });

    const insights = await MonthlyScoresV1Insights(
      positiveScoreChangeData.userUuid
    );

    expect(insights).toEqual([
      {
        birdColour: "green",
        date: "Jul 2025",
        description: "Nice! This shows that your credit health is improving.",
        numberChange: {
          from: "100",
          to: "131",
          sentiment: "positive",
        },
        title: "Your credit score increased!",
      },
    ]);
  });

  it("should return a negative score change insight", async () => {
    prisma.creditreport_monthly_scores_v1.findFirst.mockResolvedValue({
      json: negativeScoreChangeData,
    });

    const insights = await MonthlyScoresV1Insights(
      positiveScoreChangeData.userUuid
    );

    expect(insights).toEqual([
      {
        birdColour: "red",
        date: "Jul 2025",
        description:
          "Your credit score has decreased! Don't worry, this can happen for a number of reasons. It's important to check your credit report for any negative information that may have affected your score.",
        numberChange: {
          from: "357",
          to: "342",
          sentiment: "negative",
        },
        title: "Your credit score went down!",
      },
    ]);
  });

  it("should return an insight when a user has no credit score", async () => {
    prisma.creditreport_monthly_scores_v1.findFirst.mockResolvedValue({
      json: noCreditScoreData,
    });

    const insights = await MonthlyScoresV1Insights(noCreditScoreData.userUuid);

    expect(insights).toEqual([
      {
        birdColour: "red",
        date: "Jul 2025",
        description:
          "You currently have no credit score on your credit report. This means that there's not enough information about you on your financial track record",
        title: "Credit Score not found",
      },
    ]);
  });

  it("should throw an error when no monthly scores data is found", async () => {
    prisma.creditreport_monthly_scores_v1.findFirst.mockResolvedValue(null);

    await expect(
      MonthlyScoresV1Insights(noCreditScoreData.userUuid)
    ).rejects.toThrow("No Monthly Scores found.");
  });

  it("should throw an error when monthly scores JSON data is invalid", async () => {
    prisma.creditreport_monthly_scores_v1.findFirst.mockResolvedValue(
      noCreditScoreData
    );

    await expect(
      MonthlyScoresV1Insights(noCreditScoreData.userUuid)
    ).rejects.toThrow("Invalid or missing monthly scores JSON data.");
  });
});

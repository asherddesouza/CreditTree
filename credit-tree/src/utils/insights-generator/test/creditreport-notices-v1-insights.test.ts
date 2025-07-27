import NoticesV1Insights from "../src/creditreport-notices-v1-insights";
import { expect, vi } from "vitest";
import prisma from "../../../../libs/__mocks__/prisma";

vi.mock("../../../../libs/prisma.ts");

const noNoticesData = {
  bureau: "EQUIFAX",
  market: "UK",
  reportId: "42602713",
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
  notices: [],
  reportTimestamp: 1683333295777,
};

const oneNoticesData = {
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
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
  reportTimestamp: 1671775416574,
};

const invalidNoticesData = {
  bureau: "EQUIFAX",
  market: "UK",
  reportId: "42602713",
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
  notices: { notice1: "event1", notice2: "event2" },
  reportTimestamp: 1683333295777,
};

describe("NoticesV1Insights Tests", () => {
  it("should return notices insights when present", async () => {
    prisma.creditreport_notices_v1.findFirst.mockResolvedValue({
      json: oneNoticesData,
    });

    const insights = await NoticesV1Insights(oneNoticesData.userUuid);

    expect(insights).toEqual([
      {
        birdColour: "blue",
        date: "Dec 2022",
        description: "You have 2 notices on your credit report.",
        title: "Notices Found",
      },
    ]);
  });

  it("should return an empty array of insights when there are no notices", async () => {
    prisma.creditreport_notices_v1.findFirst.mockResolvedValue({
      json: noNoticesData,
    });

    const insights = await NoticesV1Insights(noNoticesData.userUuid);

    expect(insights).toEqual([]);
  });

  it("should throw an error when no notices data is found", async () => {
    prisma.creditreport_notices_v1.findFirst.mockResolvedValue(null);

    await expect(NoticesV1Insights(noNoticesData.userUuid)).rejects.toThrow(
      "No Notices found."
    );
  });

  it("should throw an error when notices JSON data is invalid", async () => {
    prisma.creditreport_notices_v1.findFirst.mockResolvedValue(
      invalidNoticesData
    );

    await expect(
      NoticesV1Insights(invalidNoticesData.userUuid)
    ).rejects.toThrow("Invalid or missing notices JSON data.");
  });
});

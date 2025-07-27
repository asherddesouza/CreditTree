import ElectoralRollV1Insights from "../src/creditreport-electoral-roll-v1-insights";
import { expect, vi } from "vitest";
import prisma from "../../../../libs/__mocks__/prisma";

vi.mock("../../../../libs/prisma.ts");

const noElectoralRollData = {
  bureau: "EQUIFAX",
  reportId: "40557458",
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
  reportTimestamp: 1675743385435,
  electoralRollData: [],
};

const someElectoralRollData = {
  bureau: "EQUIFAX",
  reportId: "40557458",
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
  reportTimestamp: 1675743385917,
  electoralRollData: [
    {
      addressId: "12345220",
      personalDetailsId: "Q/afE0pGsXwAV/L9XGab0jB9eeX4mJj12x5kzLK6S5A=",
      annualRegisterPeriod: {
        end: null,
        start: 2025,
      },
    },
    {
      addressId: "12345214",
      personalDetailsId: "Q/afE0pGsXwAV/L9XGab0jB9eeX4mJj12x5kzLK6S5A=",
      annualRegisterPeriod: {
        end: 2025,
        start: 2006,
      },
    },
  ],
};

const invalidElectoralRollData = {
  bureau: "EQUIFAX",
  reportId: "40557458",
  userUuid: "3d26ef72-e03b-4261-b661-72e46f909006",
  reportTimestamp: 1675743385435,
  electoralRollData: { address1: "123 Test St", address2: "456 Something St" },
};

describe("ElectoralRollV1Insights Tests", () => {
  it("should return electoral roll insights when present", async () => {
    prisma.creditreport_electoral_roll_v1.findFirst.mockResolvedValue({
      json: someElectoralRollData,
    });

    const insights = await ElectoralRollV1Insights(
      someElectoralRollData.userUuid
    );

    expect(insights).toEqual([
      {
        birdColour: "blue",
        date: "Feb 2023",
        description:
          "You have been registered on the electoral roll at your current address since 2025. This is a positive indicator of your overall credit health.",
        title: "Electoral Roll Data Found",
      },
    ]);
  });

  it("should return an insight when there is no electoral roll data", async () => {
    prisma.creditreport_electoral_roll_v1.findFirst.mockResolvedValue({
      json: noElectoralRollData,
    });

    const insights = await ElectoralRollV1Insights(
      noElectoralRollData.userUuid
    );

    expect(insights).toEqual([
      {
        birdColour: "blue",
        date: "Feb 2023",
        description:
          "You have no electoral roll data on your credit report. Being on the electoral roll can help improve your credit score, because it shows lenders that you are registered at your address.",
        title: "No Electoral Roll Data",
      },
    ]);
  });

  it("should throw an error when no electoral roll data is found", async () => {
    prisma.creditreport_electoral_roll_v1.findFirst.mockResolvedValue(null);

    await expect(
      ElectoralRollV1Insights(noElectoralRollData.userUuid)
    ).rejects.toThrow("No Electoral Roll data found.");
  });

  it("should throw an error when electoral roll JSON data is invalid", async () => {
    prisma.creditreport_electoral_roll_v1.findFirst.mockResolvedValue(
      invalidElectoralRollData
    );

    await expect(
      ElectoralRollV1Insights(invalidElectoralRollData.userUuid)
    ).rejects.toThrow("Invalid or missing electoral roll JSON data.");
  });
});

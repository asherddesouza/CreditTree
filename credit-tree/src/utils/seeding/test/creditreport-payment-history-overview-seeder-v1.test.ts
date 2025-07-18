import PaymentHistoryOverviewV1Seeder from "../src/creditreport-payment-history-overview-seeder-v1";
import { generateJsonData } from "../src/creditreport-payment-history-overview-seeder-v1";
import { expect, vi } from "vitest";
import prisma from "../../../../libs/__mocks__/prisma";

vi.mock("../../../../libs/prisma.ts");

describe("PaymentHistoryOverviewV1Seeder Tests", () => {
  it("should correctly seed the PaymentHistoryOverviewV1 table", async () => {
    const uuid = "3d26ef72-e03b-4261-b661-72e46f909006";
    const jsonData = await generateJsonData(uuid);

    prisma.creditreport_payment_history_overview_v1.create.mockResolvedValue({
      id: uuid,
      bureau: "EQUIFAX",
      json: jsonData,
    });

    const result = await PaymentHistoryOverviewV1Seeder(uuid, jsonData);

    expect(result).toEqual(uuid);
  });
});

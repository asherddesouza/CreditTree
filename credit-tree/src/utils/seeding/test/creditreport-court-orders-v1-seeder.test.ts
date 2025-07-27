import CourtOrdersV1Seeder from "../src/creditreport-court-orders-v1-seeder";
import { generateJsonData } from "../src/creditreport-court-orders-v1-seeder";
import { expect, vi } from "vitest";
import prisma from "../../../../libs/__mocks__/prisma";

vi.mock("../../../../libs/prisma.ts");

describe("CourtOrdersV1Seeder Tests", () => {
  it("should correctly seed the CourtOrdersV1 table", async () => {
    const uuid = "3d26ef72-e03b-4261-b661-72e46f909006";
    const jsonData = await generateJsonData(uuid);

    prisma.creditreport_court_orders_v1.create.mockResolvedValue({
      id: uuid,
      bureau: "EQUIFAX",
      json: jsonData,
    });

    const result = await CourtOrdersV1Seeder(uuid, jsonData);

    expect(result).toEqual(uuid);
  });
});

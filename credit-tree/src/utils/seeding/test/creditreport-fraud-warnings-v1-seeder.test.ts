import FraudWarningsV1Seeder from "../src/creditreport-fraud-warnings-v1-seeder";
import { generateJsonData } from "../src/creditreport-fraud-warnings-v1-seeder";
import { expect, vi } from "vitest";
import prisma from "../../../../libs/__mocks__/prisma";

vi.mock("../../../../libs/prisma.ts");

describe("FraudWarningsV1Seeder Tests", () => {
  it("should correctly seed the FraudWarningsV1 table", async () => {
    const uuid = "3d26ef72-e03b-4261-b661-72e46f909006";
    const jsonData = await generateJsonData(uuid);

    prisma.creditreport_fraud_warnings_v1.create.mockResolvedValue({
      id: uuid,
      bureau: "EQUIFAX",
      json: jsonData,
    });

    const result = await FraudWarningsV1Seeder(uuid, jsonData);

    expect(result).toEqual(uuid);
  });
});

import InsolvenciesV1Seeder from "../src/creditreport-insolvencies-v1-seeder";
import { generateJsonData } from "../src/creditreport-insolvencies-v1-seeder";
import { expect, vi } from "vitest";
import prisma from "../../../../libs/__mocks__/prisma";

vi.mock("../../../../libs/prisma.ts");

describe("InsolvenciesV1Seeder Tests", () => {
  it("should correctly seed the InsolvenciesV1 table", async () => {
    const uuid = "3d26ef72-e03b-4261-b661-72e46f909006";
    const jsonData = await generateJsonData(uuid);

    prisma.creditreport_insolvencies_v1.create.mockResolvedValue({
      id: uuid,
      bureau: "EQUIFAX",
      json: jsonData,
    });

    const result = await InsolvenciesV1Seeder(uuid, jsonData);

    expect(result).toEqual(uuid);
  });
});

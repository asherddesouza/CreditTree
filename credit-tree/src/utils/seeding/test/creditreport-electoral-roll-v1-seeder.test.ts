import ElectoralRollV1Seeder from "../src/creditreport-electoral-roll-v1-seeder";
import { generateJsonData } from "../src/creditreport-electoral-roll-v1-seeder";
import { expect, vi } from "vitest";
import prisma from "../../../../libs/__mocks__/prisma";

vi.mock("../../../../libs/prisma.ts");

describe("ElectoralRollV1Seeder Tests", () => {
  it("should correctly seed the ElectoralRollV1 table", async () => {
    const uuid = "3d26ef72-e03b-4261-b661-72e46f909006";
    const jsonData = await generateJsonData(uuid);

    prisma.creditreport_electoral_roll_v1.create.mockResolvedValue({
      id: uuid,
      bureau: "EQUIFAX",
      json: jsonData,
    });

    const result = await ElectoralRollV1Seeder(uuid, jsonData);

    expect(result).toEqual(uuid);
  });
});

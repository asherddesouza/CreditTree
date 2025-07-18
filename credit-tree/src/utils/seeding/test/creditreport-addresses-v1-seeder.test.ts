import AddressesV1Seeder from "../src/creditreport-addresses-v1-seeder";
import { generateJsonData } from "../src/creditreport-addresses-v1-seeder";
import { expect, vi } from "vitest";
import prisma from "../../../../libs/__mocks__/prisma";

vi.mock("../../../../libs/prisma.ts");

describe("AddressesV1Seeder Tests", () => {
  it("should correctly seed the AddressesV1 table", async () => {
    const uuid = "3d26ef72-e03b-4261-b661-72e46f909006";
    const jsonData = await generateJsonData(uuid);

    prisma.creditreport_addresses_v1.create.mockResolvedValue({
      id: uuid,
      bureau: "EQUIFAX",
      json: jsonData,
    });

    const result = await AddressesV1Seeder(uuid, jsonData);

    expect(result).toEqual(uuid);
  });
});

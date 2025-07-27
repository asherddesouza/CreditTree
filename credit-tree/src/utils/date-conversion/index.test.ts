import { UnixToMonthAndYear } from "@/utils/date-conversion";

describe("Test UnixToMonthAndYear", () => {
  it("should convert Unix timestamp to Month and Year", () => {
    const timestamp = 1672531199000;
    const result = UnixToMonthAndYear(timestamp);
    expect(result).toBe("Dec 2022");
  });
  it("should handle negative timestamps", () => {
    const timestamp = -1;
    const result = UnixToMonthAndYear(timestamp);
    expect(result).toBe("Dec 1969");
  });
});

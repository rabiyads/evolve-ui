import { formatMoney } from "@/lib/formatMoney";

describe("formatMoney", () => {
  it("formats positive amounts correctly", () => {
    expect(formatMoney(1234)).toBe("$12.34");
    expect(formatMoney(100)).toBe("$1.00");
    expect(formatMoney(50)).toBe("$0.50");
  });

  it("formats zero correctly", () => {
    expect(formatMoney(0)).toBe("$0.00");
  });

  it("formats negative amounts correctly", () => {
    expect(formatMoney(-500)).toBe("-$5.00");
    expect(formatMoney(-1234)).toBe("-$12.34");
  });

  it("handles large amounts", () => {
    expect(formatMoney(123456789)).toBe("$1,234,567.89");
  });
});

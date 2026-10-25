import { describe, expect, it } from "vitest";
import { businessDate, dateAfter, findSelection, validPreference } from "../../src/lib/booking";

describe("booking preferences", () => {
  it("uses Georgia's day when UTC is still the previous day", () => {
    expect(businessDate(new Date("2026-12-31T21:00:00Z"))).toBe("2027-01-01");
  });
  it("validates real calendar days and the business booking horizon", () => {
    const now = new Date("2026-10-25T10:00:00Z");
    expect(validPreference("2026-10-25", "12:00", now)).toBe(false);
    expect(validPreference("2026-10-26", "12:00", now)).toBe(true);
    expect(validPreference(dateAfter("2026-10-25", 90), "23:59", now)).toBe(true);
    expect(validPreference(dateAfter("2026-10-25", 91), "12:00", now)).toBe(false);
    expect(validPreference("2026-11-31", "12:00", now)).toBe(false);
    expect(validPreference("2026-10-26", "25:00", now)).toBe(false);
  });
  it("does not mix one barber's service or price with another", () => {
    expect(findSelection(2, 1)).toBeNull();
    expect(findSelection(2, 3)?.service.price).toBe(20);
    expect(findSelection(3, 4)?.service.duration).toBe(50);
    expect(findSelection(99, 1)).toBeNull();
  });
});

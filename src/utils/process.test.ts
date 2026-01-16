import { processUntil } from "./process";

describe(processUntil, () => {
  it("returns true when all predicates pass", () => {
    const value = 10;

    const predicates = [
      (value: number) => value > 0,
      (value: number) => value < 20,
      (value: number) => value % 2 === 0,
    ];

    expect(processUntil(value, predicates)).toBe(true);
  });

  it("returns false if any predicate fails", () => {
    const value = 15;

    const predicates = [
      (value: number) => value > 0,
      (value: number) => value < 20,
      (value: number) => value % 2 === 0, // fails
      (value: number) => value < 30, // should not be reached
    ];

    expect(processUntil(value, predicates)).toBe(false);
  });

  it("short-circuits after first failure", () => {
    let ranLast = 10;

    const predicates = [
      (value: number) => value < 0,
      (value: number) => {
        ranLast = value;
        return true;
      },
    ];

    const result = processUntil(5, predicates);
    expect(result).toBe(false);
    expect(ranLast).toBe(10);
  });

  it("returns true when predicate list is empty", () => {
    expect(processUntil(42, [])).toBe(true);
  });
});

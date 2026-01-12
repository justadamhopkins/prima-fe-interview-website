import { isFunction, isString } from "@utils/primitives/boolean.ts";

describe(isString, () => {
  it("should return true if the value is a string", () => {
    const result = isString("string");

    expect(result).toBe(true);
  });

  describe.each([100, null, undefined, {}, [{ test: "hey" }]])("when giving a value %o", (val) => {
    it("should check whether the value is a string", () => {
      const result = isString(val);

      expect(result).toEqual(false);
    });
  });
});

describe(isFunction, () => {
  describe.each([
    {
      val: () => "i am a string",
      assertion: true,
    },
    {
      val: [],
      assertion: false,
    },
    {
      val: 10,
      assertion: false,
    },
    {
      val: {},
      assertion: false,
    },
    {
      val: null,
      assertion: false,
    },
    {
      val: undefined,
      assertion: false,
    },
  ])("when giving a val %p", ({ val, assertion }) => {
    it("should check whether the item is a function", () => {
      const result = isFunction(val);

      expect(result).toEqual(assertion);
    });
  });
});

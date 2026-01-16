import { renderHook } from "@tests/config/custom-render";
import { useQueryParams } from ".";

const setSearchParamsMock = vi.fn();

vi.mock("react-router", async (importOriginal) => {
  const actual: object = await importOriginal();
  return {
    ...actual,
    useSearchParams: () => {
      const params = new URLSearchParams("foo=bar&baz=qux");
      return [params, setSearchParamsMock];
    },
  };
});

describe(useQueryParams, () => {
  beforeEach(() => {
    setSearchParamsMock.mockReset();
  });

  it("returns correct initial values", () => {
    const { result } = renderHook(() => useQueryParams());

    expect(result.current.get("foo")).toBe("bar");
    expect(result.current.get("baz")).toBe("qux");
    expect(result.current.get("nonexistent")).toBe(null);
    expect(result.current.all.get("foo")).toBe("bar");
  });

  it("set() updates values correctly", () => {
    const { result } = renderHook(() => useQueryParams());

    result.current.set({ foo: "newValue", baz: undefined });

    expect(setSearchParamsMock).toHaveBeenCalledTimes(1);
  });
});

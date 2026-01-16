import { useSearchParams } from "react-router";

export function useQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const setParams = (updates: Record<string, string | undefined>) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      Object.entries(updates).forEach(([key, value]) => {
        if (value === undefined || value === "") {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });

      return params;
    });
  };

  return {
    get: (key: string) => searchParams.get(key),
    set: setParams,
    all: searchParams,
  };
}

import type { TValueOf } from "@app/types/utils.ts";

export const TSHIRT_SIZES = {
  XS: "XS",
  SM: "SM",
  MD: "MD",
  LG: "LG",
  XL: "XL",
} as const;

export type TTShirtSizes = TValueOf<typeof TSHIRT_SIZES>;

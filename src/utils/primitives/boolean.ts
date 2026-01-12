export const isString = (value: unknown): value is string => typeof value === "string";

export const isFunction = (value: unknown): value is (...args: unknown[]) => unknown => {
  return typeof value === "function";
};

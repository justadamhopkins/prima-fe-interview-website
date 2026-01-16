type Predicate<T> = (value: T) => boolean;

export function processUntil<T>(value: T, predicates: Predicate<T>[]): boolean {
  for (const predicate of predicates) {
    if (!predicate(value)) {
      return false;
    }
  }
  return true;
}

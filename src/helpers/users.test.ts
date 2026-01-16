import { MOCK_USERS } from "@constants/fixtures/users.ts"; // adjust path if needed
import { ROLES } from "@constants/roles.ts";
import { filterUsers } from "./users";

describe(filterUsers, () => {
  it("returns all users when no search term and no role filter", () => {
    const result = filterUsers(MOCK_USERS, "", []);

    expect(result).toEqual(MOCK_USERS);
  });

  it("filters by role only", () => {
    const result = filterUsers(MOCK_USERS, "", [ROLES.GUEST]);
    expect(result.every((u) => u.role === ROLES.GUEST)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  it("filters by search term only (name, case insensitive)", () => {
    const result = filterUsers(MOCK_USERS, "george", []);

    expect(result.length).toBe(1);
    expect.arrayContaining([expect.objectContaining({ name: "George Harris" })]);
  });

  it("filters by role AND search term", () => {
    const result = filterUsers(MOCK_USERS, "serena", [ROLES.GUEST]);
    expect(result.length).toBe(1);

    expect.arrayContaining([expect.objectContaining({ name: "Serena Parisi", role: ROLES.GUEST })]);
  });

  it("returns empty array if no user matches both filters", () => {
    const result = filterUsers(MOCK_USERS, "george", [ROLES.GUEST]);
    expect(result.length).toBe(0);
  });

  it("handles empty search term with role filter", () => {
    const result = filterUsers(MOCK_USERS, "", [ROLES.ADMIN]);
    expect(result.every((u) => u.role === ROLES.ADMIN)).toBe(true);
  });

  it("handles empty roles with search term", () => {
    const result = filterUsers(MOCK_USERS, "emma", []);

    expect(result.length).toBe(1);
    expect(result).toEqual(
      expect.arrayContaining([expect.objectContaining({ name: "Emma Clark" })]),
    );
  });

  it("handles search term that matches multiple users", () => {
    const result = filterUsers(MOCK_USERS, "product", []);

    expect(result.length).toBe(0);
  });

  it("is case insensitive for both name and role", () => {
    const result = filterUsers(MOCK_USERS, "serena", [ROLES.GUEST]);

    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Serena Parisi");
  });
});

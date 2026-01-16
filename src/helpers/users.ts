import type { TUser } from "@app/types/api.ts";
import type { TRoleType } from "@constants/roles.ts";
import { processUntil } from "@utils/process.ts";

const checkByRole = (roles: string[]) => (user: TUser) =>
  roles.length === 0 || roles.includes(user.role);

const bySearch = (term: string) => (user: TUser) =>
  term === "" || user.name.toLowerCase().includes(term);

export function filterUsers(users: TUser[], searchTerm: string, roles: TRoleType[] = []) {
  const term = searchTerm.trim().toLowerCase();

  return users.filter((user) => processUntil(user, [checkByRole(roles), bySearch(term)]));
}

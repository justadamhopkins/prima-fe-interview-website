import type { TRoleType } from "@constants/roles.ts";

export type TUser = {
  id: string;
  name: string;
  team: "marketing" | "finance" | "website" | "security";
  email: `${string}@${string}`;
  role: TRoleType;
};

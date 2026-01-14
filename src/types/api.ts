import type { TRoleType } from "@constants/roles.ts";

export type TUser = {
  id: string;
  name: string;
  title: string;
  phone: string;
  location: string;
  joinDate: string;
  status: "active" | "inactive";
  team: Capitalize<"marketing" | "finance" | "website" | "security">;
  email: `${string}@${string}`;
  role: TRoleType;
};

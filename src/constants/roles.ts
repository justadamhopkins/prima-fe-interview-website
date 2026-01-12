import type { TValueOf } from "@common/types/utils";

export const ROLES = {
  ADMIN: "ADMIN",
  EDITOR: "EDITOR",
  VIEWER: "VIEWER",
  GUEST: "GUEST",
} as const;

export type TRoleType = TValueOf<typeof ROLES>;

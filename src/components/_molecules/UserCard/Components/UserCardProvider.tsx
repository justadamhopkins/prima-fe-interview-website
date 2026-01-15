import type { TUser } from "@app/types/api.ts";
import type { TMaybeUndefined } from "@app/types/utils.ts";
import { createContext, type PropsWithChildren, use } from "react";

type TUserCardContextType = {
  user: TUser;
};

const UserCardContext = createContext<TMaybeUndefined<TUserCardContextType>>(undefined);

export const UserCardProvider = ({ user, children }: PropsWithChildren<TUserCardContextType>) => {
  return <UserCardContext value={{ user }}>{children}</UserCardContext>;
};

export const useUserCardContext = () => {
  const context = use(UserCardContext);

  if (!context) {
    throw new Error("UserCardContext must be used within UserCard");
  }

  return context;
};

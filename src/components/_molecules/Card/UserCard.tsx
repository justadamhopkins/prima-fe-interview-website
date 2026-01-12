import type { TUser } from "@app/types/api.ts";
import type { PropsWithChildren } from "react";
import { UserCardProvider } from "./Components/UserCardProvider.tsx";

type TUserCardProps = {
  user: TUser;
};

export const UserCard = ({ user }: PropsWithChildren<TUserCardProps>) => {
  return (
    <UserCardProvider user={user}>
      <article></article>
    </UserCardProvider>
  );
};

import type { TUser } from "@app/types/api.ts";
import { UserCardDetails } from "@molecules/UserCard/Components/UserCardDetails.tsx";
import { UserCardFooter } from "@molecules/UserCard/Components/UserCardFooter.tsx";
import { UserCardHeader } from "@molecules/UserCard/Components/UserCardHeader.tsx";
import clsx from "clsx";
import type { PropsWithChildren } from "react";
import { UserCardProvider } from "./Components/UserCardProvider.tsx";
import styles from "./UserCard.module.css";
export type TUserCardProps = {
  user: TUser;
};

export const UserCard = ({ user, children }: PropsWithChildren<TUserCardProps>) => {
  return (
    <UserCardProvider user={user}>
      <article className={clsx([styles.userCard])}>{children}</article>
    </UserCardProvider>
  );
};

UserCard.Header = UserCardHeader;
UserCard.Details = UserCardDetails;
UserCard.Footer = UserCardFooter;

import { DetailTerm } from "@atoms/DetailTerm";
import { useUserCardContext } from "@molecules/UserCard/Components/UserCardProvider.tsx";
import type { PropsWithChildren } from "react";
import styles from "../UserCard.module.css";

export const UserCardDetails = ({ children }: PropsWithChildren) => {
  const { user } = useUserCardContext();

  return (
    children || (
      <dl className={styles.userCard__detailsWrapper}>
        <DetailTerm label="Team">{user.team}</DetailTerm>
        <DetailTerm label="Contact information">
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </DetailTerm>
      </dl>
    )
  );
};

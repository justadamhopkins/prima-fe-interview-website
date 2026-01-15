import { Badge } from "@atoms/Badge";
import { useUserCardContext } from "@molecules/UserCard/Components/UserCardProvider.tsx";
import type { PropsWithChildren } from "react";
import styles from "../UserCard.module.css";

export const UserCardHeader = ({ children }: PropsWithChildren) => {
  const { user } = useUserCardContext();

  return (
    <header className={styles.userCard__header}>
      {children || (
        <>
          <Badge variant={user.role} label={user.role} />
          <h2 className={styles.userCard__title}>{user.name}</h2>
          <p className={styles.userCard__role}>{user.title}</p>
        </>
      )}
    </header>
  );
};

import type { TUser } from "@app/types/api.ts";
import { ListRenderer } from "@components/utilities/ListRenderer";
import { DIALOG_LAYOUTS, DIALOG_VARIANTS } from "@molecules/Dialog";
import { UserCard } from "@molecules/UserCard";
import { UserDialog } from "@organisms/UserDialog";
import type { FC } from "react";
import styles from "./UserCardList.module.css";

interface IUserCardListProps {
  users: TUser[];
}

export const UserCardList: FC<IUserCardListProps> = ({ users }) => {
  return (
    <ul className={styles.userCardList}>
      <ListRenderer
        items={users}
        render={({ item }) => (
          <li>
            <UserCard user={item}>
              <UserCard.Header />
              <UserCard.Details />
              <UserCard.Footer>
                <UserDialog
                  layout={DIALOG_LAYOUTS.CENTER}
                  variant={DIALOG_VARIANTS.PRIMARY}
                  user={item}
                />
              </UserCard.Footer>
            </UserCard>
          </li>
        )}
      />
    </ul>
  );
};

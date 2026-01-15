import { BUTTON_VARIANTS, Button } from "@atoms/Button";
import { TSHIRT_SIZES } from "@constants/settings.ts";
import type { PropsWithChildren } from "react";
import styles from "../UserCard.module.css";

type IUserCardFooterProps = {
  handleCardAction?: () => void;
};

export const UserCardFooter = ({
  children,
  handleCardAction,
}: PropsWithChildren<IUserCardFooterProps>) => {
  return (
    children || (
      <div className={styles.userCard__footerWrapper}>
        <Button variant={BUTTON_VARIANTS.PRIMARY} size={TSHIRT_SIZES.SM} onClick={handleCardAction}>
          View details
        </Button>
      </div>
    )
  );
};

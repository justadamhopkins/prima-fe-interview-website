import type { TUser } from "@app/types/api.ts";
import { Badge } from "@atoms/Badge";
import { BUTTON_VARIANTS, Button } from "@atoms/Button";
import { DetailTerm } from "@atoms/DetailTerm";
import { TSHIRT_SIZES } from "@constants/settings.ts";
import {
  DialogClose,
  DialogContent,
  DialogProvider,
  DialogTitle,
  DialogTrigger,
  type TDialogProps,
} from "@molecules/Dialog";
import { useState } from "react";
import styles from "./UserDialog.module.css";

type TUserDialogProps = {
  user: TUser;
} & TDialogProps;

export const UserDialog = ({ variant, layout, user }: TUserDialogProps) => {
  const [isUserDialogOpen, setIsUserDialogOpen] = useState(false);

  return (
    <DialogProvider onOpenChange={setIsUserDialogOpen} isDialogOpen={isUserDialogOpen}>
      <DialogTrigger className={styles.filterDialog__trigger} asChild={true}>
        <Button onClick={() => ""} size={TSHIRT_SIZES.SM} variant={BUTTON_VARIANTS.PRIMARY}>
          View details
        </Button>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined} variant={variant} layout={layout}>
        <div>
          <header className={styles.userDialog__header}>
            <Badge variant={user.role} label={user.role} />

            <DialogTitle className={styles.userDialog__title}>{user.name}</DialogTitle>
            <p className={styles.userDialog__role}>{user.title}</p>
          </header>
          <dl className={styles.userDialog__detailsWrapper}>
            <DetailTerm label="Team">{user.team}</DetailTerm>
            <DetailTerm label="Contact information">
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </DetailTerm>
            <DetailTerm label="Other details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.
            </DetailTerm>
          </dl>
          <div className={styles.userDialog__buttonWrapper}>
            <DialogClose asChild={true} aria-label="close dialog">
              <Button size={TSHIRT_SIZES.SM} variant={BUTTON_VARIANTS.PRIMARY}>
                Close
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </DialogProvider>
  );
};

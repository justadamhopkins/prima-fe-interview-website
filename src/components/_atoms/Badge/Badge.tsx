import type { TRoleType } from "@app/constants/roles.ts";
import type { TWithClassName } from "@app/types/common.ts";
import clsx from "clsx";
import styles from "./Badge.module.css";

type TBadgeProps = TWithClassName<{
  label: string;
  variant: Uppercase<TRoleType>;
}>;

export const Badge = ({ label, variant, className }: TBadgeProps) => {
  return (
    <span
      className={clsx([styles.badge, styles[`badge--${variant.toLocaleLowerCase()}`], className])}
    >
      {label}
    </span>
  );
};

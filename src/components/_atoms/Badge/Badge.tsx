import type { TRoleType } from "@app/constants/roles.ts";
import type { TTshirtSize, TWithClassName } from "@app/types/common.ts";
import clsx from "clsx";
import styles from "./Badge.module.css";

type TBadgeProps = TWithClassName<{
  label: string;
  variant: TRoleType;
  size: TTshirtSize;
}>;

export const Badge = ({ label, variant, size, className }: TBadgeProps) => {
  return (
    <span
      className={clsx([
        styles.badge,
        styles[`size-${size}`],
        styles[`variant-${variant}`],
        className,
      ])}
    >
      {label}
    </span>
  );
};

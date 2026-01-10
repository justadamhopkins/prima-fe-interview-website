import type { TRoleType } from "@app/constants/roles.ts";
import clsx from "clsx";
import styles from "./Badge.module.css";

type TBadgeProps = {
  label: string;
  type: TRoleType;
};

export const Badge = ({ label }: TBadgeProps) => {
  return <span className={clsx(styles.badge)}>{label}</span>;
};

import type { TRoleType } from "@app/constants/roles.ts";
import clsx from "clsx";
import styles from "./Badge.module.css";

type TBadgeProps = {
  copy: string;
  type: TRoleType;
};

export const Badge = ({ copy }: TBadgeProps) => {
  return <span className={clsx(styles.badge)}>{copy}</span>;
};

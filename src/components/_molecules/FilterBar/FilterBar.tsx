import type { TWithClassName } from "@app/types/common.ts";

import type { TRoleType } from "@constants/roles.ts";
import { FilterChips, type TFilterChips } from "@molecules/FilterChips";
import clsx from "clsx";
import styles from "./FilterBar.module.css";

export type TFilterBarProps = TWithClassName<{ values: TRoleType[]; label?: string }> &
  TFilterChips;

export const FilterBar = ({
  values,
  selectedValue,
  onValueChange,
  className,
  label = "Filter by",
}: TFilterBarProps) => {
  return (
    <div className={clsx([styles.filterBar, className])}>
      <p className={styles.filterBar__label}>{`${label}:`}</p>
      <FilterChips selectedValue={selectedValue} onValueChange={onValueChange} values={values} />
    </div>
  );
};

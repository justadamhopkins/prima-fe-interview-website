import type { TWithClassName } from "@app/types/common.ts";
import { Badge } from "@atoms/Badge";
import { RawButton } from "@atoms/RawButton";
import { ListRenderer } from "@components/utilities/ListRenderer";
import {
  ToggleGroupItem,
  ToggleGroupMulti,
  type TToggleGroupMultiProps,
} from "@components/utilities/ToggleGroupMulti";
import type { TRoleType } from "@constants/roles.ts";
import clsx from "clsx";
import styles from "./FilterChips.module.css";

export type TFilterChips = TWithClassName<{
  values: TRoleType[];
}> &
  TToggleGroupMultiProps;

export const FilterChips = ({ selectedValue, onValueChange, values, className }: TFilterChips) => {
  return (
    <ToggleGroupMulti
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      className={clsx([styles.filterChips, className])}
    >
      <ListRenderer
        items={values}
        render={({ item }) => {
          return (
            <ToggleGroupItem
              className={styles.filterChips__trigger}
              asChild={true}
              value={item}
              aria-label={item}
            >
              <RawButton>
                <Badge label={item} variant={item} isActive={selectedValue.includes(item)} />
              </RawButton>
            </ToggleGroupItem>
          );
        }}
      />
    </ToggleGroupMulti>
  );
};

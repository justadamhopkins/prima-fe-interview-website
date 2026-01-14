import type { TWithClassName } from "@app/types/common.ts";
import { Badge } from "@atoms/Badge";
import { ListRenderer } from "@components/utilities/ListRenderer";
import type { TRoleType } from "@constants/roles.ts";
import clsx from "clsx";
import styles from "./FilterBar.module.css";

type TFilterBarProps = TWithClassName<{
  roles: TRoleType[];
  label?: string;
  handleFilterSelection: (role: TRoleType) => void;
}>;

export const FilterBar = ({
  roles,
  handleFilterSelection,
  className,
  label = "Filter by",
}: TFilterBarProps) => {
  return (
    <div className={clsx([styles.filterBar, className])}>
      <p className={styles.filterBar__label}>{`${label}:`}</p>
      <ul className={styles.filterBar__listWrapper}>
        <ListRenderer
          items={roles}
          render={({ item }) => {
            return (
              <li>
                <button type="button" onClick={() => handleFilterSelection(item)}>
                  <Badge label={item} variant={item} />
                </button>
              </li>
            );
          }}
        />
      </ul>
    </div>
  );
};

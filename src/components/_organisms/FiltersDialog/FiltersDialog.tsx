import { BUTTON_VARIANTS, Button } from "@atoms/Button";
import { RawButton } from "@atoms/RawButton";
import { TSHIRT_SIZES } from "@constants/settings.ts";
import {
  DialogClose,
  DialogContent,
  DialogProvider,
  DialogTitle,
  DialogTrigger,
  type TDialogProps,
} from "@molecules/Dialog";
import { FilterChips, type TFilterChips } from "@molecules/FilterChips";
import { useState } from "react";
import styles from "./FiltersDialog.module.css";

type TFiltersDialogProps = TDialogProps & TFilterChips;

export const FiltersDialog = ({
  variant,
  layout,
  selectedValue,
  onValueChange,
  values,
}: TFiltersDialogProps) => {
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);

  return (
    <DialogProvider onOpenChange={setIsFilterDialogOpen} isDialogOpen={isFilterDialogOpen}>
      <DialogTrigger className={styles.filterDialog__trigger} asChild={true}>
        <Button onClick={() => ""} size={TSHIRT_SIZES.SM} variant={BUTTON_VARIANTS.SECONDARY}>
          Show filters
        </Button>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined} variant={variant} layout={layout}>
        <div>
          <DialogTitle className={styles.filterDialog__title}>Filters</DialogTitle>
          <DialogClose
            className={styles.filterDialog__closeButton}
            asChild={true}
            aria-label="close dialog"
          >
            <RawButton>X</RawButton>
          </DialogClose>
          <FilterChips
            selectedValue={selectedValue}
            onValueChange={onValueChange}
            values={values}
          />
        </div>
      </DialogContent>
    </DialogProvider>
  );
};

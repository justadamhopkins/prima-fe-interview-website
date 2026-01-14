import type { TWithClassName } from "@app/types/common.ts";
import { BUTTON_VARIANTS, Button } from "@atoms/Button";
import { TSHIRT_SIZES } from "@constants/settings.ts";
import { Field } from "@molecules/Forms/Field";
import clsx from "clsx";
import type { ChangeEvent, FC } from "react";
import styles from "./SearchInput.module.css";

type ISearchInputProps = TWithClassName<{
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  value: string;
}>;

export const SearchInput: FC<ISearchInputProps> = ({
  onChange,
  handleSearch,
  value,
  className,
}: ISearchInputProps) => {
  return (
    <div className={clsx([styles.searchInput, className])}>
      <Field
        className={styles.searchInput__input}
        id="search-input"
        label="WHAT ARE YOU LOOKING FOR?"
        onChange={onChange}
        value={value}
      />
      <Button onClick={handleSearch} variant={BUTTON_VARIANTS.PRIMARY} size={TSHIRT_SIZES.LG}>
        Search
      </Button>
    </div>
  );
};

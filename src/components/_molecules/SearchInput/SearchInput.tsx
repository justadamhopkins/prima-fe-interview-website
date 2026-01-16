import type { TWithClassName } from "@app/types/common.ts";
import { BUTTON_VARIANTS, Button } from "@atoms/Button";
import { TSHIRT_SIZES } from "@constants/settings.ts";
import { Field } from "@molecules/Forms/Field";
import clsx from "clsx";
import type { ChangeEvent, FC, FormEvent } from "react";
import styles from "./SearchInput.module.css";

type ISearchInputProps = TWithClassName<{
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSearchSubmit: (event: FormEvent<HTMLFormElement>) => void;
  value: string;
}>;

export const SearchInput: FC<ISearchInputProps> = ({
  onChange,
  handleSearchSubmit,
  value,
  className,
}: ISearchInputProps) => {
  return (
    <form className={clsx([styles.searchInput, className])} onSubmit={handleSearchSubmit}>
      <Field
        className={styles.searchInput__input}
        id="search"
        label="WHAT ARE YOU LOOKING FOR?"
        onChange={onChange}
        value={value}
      />
      <Button type="submit" variant={BUTTON_VARIANTS.PRIMARY} size={TSHIRT_SIZES.LG}>
        Search
      </Button>
    </form>
  );
};

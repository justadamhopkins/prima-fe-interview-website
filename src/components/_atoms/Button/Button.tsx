import type { TValueOf } from "@app/types/utils.ts";
import type { TTShirtSizes } from "@constants/settings.ts";
import clsx from "clsx";
import type { ComponentProps } from "react";
import styles from "./Button.module.css";

export const BUTTON_VARIANTS = {
  PRIMARY: "PRIMARY",
  SECONDARY: "SECONDARY",
} as const;

export type TButtonVariants = TValueOf<typeof BUTTON_VARIANTS>;

type TButtonProps = {
  variant: TButtonVariants;
  size: TTShirtSizes;
} & ComponentProps<"button">;

export const Button = ({ children, variant, size, className, ...rest }: TButtonProps) => {
  return (
    <button
      {...rest}
      className={clsx([
        styles.button,
        styles[`button--${variant.toLowerCase()}`],
        styles[`button--${size.toLowerCase()}`],
        className,
      ])}
    >
      {children}
    </button>
  );
};

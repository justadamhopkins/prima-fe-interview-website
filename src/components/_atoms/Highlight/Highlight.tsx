import type { TValueOf } from "@app/types/utils.ts";
import clsx from "clsx";
import type { PropsWithChildren } from "react";
import styles from "./Highlight.module.css";

export const HIGHLIGHT_VARIANTS = {
  PRIMARY: "PRIMARY",
} as const;

export type THighlightVariants = TValueOf<typeof HIGHLIGHT_VARIANTS>;

type THighlightProps = {
  variant: THighlightVariants;
};

export const Highlight = ({ variant, children }: PropsWithChildren<THighlightProps>) => {
  return (
    <span className={clsx([styles.highlight, styles[`highlight--${variant.toLowerCase()}`]])}>
      {children}
    </span>
  );
};

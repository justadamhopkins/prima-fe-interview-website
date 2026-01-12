import type { TWithClassName } from "@app/types/common.ts";
import type { TPolymorphicComponentPropWithRef } from "@app/types/libs/polymorphism.ts";
import type { TValueOf } from "@app/types/utils.ts";
import clsx from "clsx";
import type { ElementType } from "react";
import styles from "./Overlay.module.css";

export const OVERLAY_VARIANTS = {
  PRIMARY: "PRIMARY",
} as const;

export type TOverlayVariants = TValueOf<typeof OVERLAY_VARIANTS>;

export type TOverlayProps<C extends ElementType = "div"> = TPolymorphicComponentPropWithRef<
  C,
  TWithClassName<{ variant: TOverlayVariants }>
>;

export const Overlay = <C extends ElementType = "div">({
  variant,
  as,
  className,
  ...rest
}: TOverlayProps<C>) => {
  const Overlay = as || "div";

  return (
    <Overlay
      {...rest}
      data-testid="overlay"
      className={clsx([styles.overlay, styles[`overlay--${variant.toLowerCase()}`], className])}
    />
  );
};

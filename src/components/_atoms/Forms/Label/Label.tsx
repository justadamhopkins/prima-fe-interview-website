import clsx from "clsx";
import type { ComponentProps } from "react";
import styles from "./Label.module.css";

type TLabelProps = ComponentProps<"label">;

export const Label = ({ children, className, ...rest }: TLabelProps) => {
  return (
    <label {...rest} className={clsx([styles.label, className])}>
      {children}
    </label>
  );
};

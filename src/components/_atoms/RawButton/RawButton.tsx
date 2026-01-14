import clsx from "clsx";
import type { ComponentProps } from "react";
import styles from "./RawButton.module.css";

type TRawButtonProps = ComponentProps<"button">;

export const RawButton = ({ children, className, ...rest }: TRawButtonProps) => {
  return (
    <button {...rest} className={clsx([styles.rawButton, className])}>
      {children}
    </button>
  );
};

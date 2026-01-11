import clsx from "clsx";
import type { ComponentProps } from "react";
import styles from "./Input.module.css";

type IInputProps = ComponentProps<"input">;

export const Input = ({ className, ...rest }: IInputProps) => {
  return <input {...rest} className={clsx([styles.input, className])} />;
};

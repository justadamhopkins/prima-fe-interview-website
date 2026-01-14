import clsx from "clsx";
import type { ComponentProps } from "react";
import styles from "./Input.module.css";

export type IInputProps = ComponentProps<"input">;

export const Input = ({ className, onChange, ...rest }: IInputProps) => {
  return <input {...rest} onChange={onChange} className={clsx([styles.input, className])} />;
};

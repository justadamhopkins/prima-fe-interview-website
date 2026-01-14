import { type IInputProps, Input } from "@atoms/Forms/Input";
import { Label } from "@atoms/Forms/Label";
import clsx from "clsx";
import styles from "./Field.module.css";

type TFieldProps = {
  id: string;
  label: string;
} & IInputProps;

export const Field = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  className,
  ...inputProps
}: TFieldProps) => {
  return (
    <div className={clsx([styles.field, className])}>
      <Label htmlFor={id}>{label}</Label>
      <Input {...inputProps} id={id} type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default Field;

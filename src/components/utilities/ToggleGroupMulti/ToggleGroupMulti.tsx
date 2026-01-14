import {
  ToggleGroupItem as RadixToggleGroupItem,
  ToggleGroup,
  type ToggleGroupMultipleProps,
} from "@radix-ui/react-toggle-group";
import type { PropsWithChildren } from "react";

export type TToggleGroupMultiProps<T extends string = string> = Omit<
  ToggleGroupMultipleProps,
  "type" | "onValueChange" | "value"
> & {
  selectedValue: T[];
  onValueChange: (value: T[]) => void;
};

export const ToggleGroupMulti = <T extends string>({
  selectedValue,
  onValueChange,
  children,
  className,
  ...rest
}: PropsWithChildren<TToggleGroupMultiProps<T>>) => {
  return (
    <ToggleGroup
      {...rest}
      className={className}
      type="multiple"
      value={selectedValue}
      onValueChange={onValueChange}
    >
      {children}
    </ToggleGroup>
  );
};

export const ToggleGroupItem = RadixToggleGroupItem;

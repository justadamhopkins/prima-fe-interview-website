import {
  type TUseDisclosureProps,
  type TUseDisclosureReturn,
  useDisclosure,
} from "@hooks/useDisclosure";
import type { DialogProps } from "@radix-ui/react-dialog";
import { createContext, type FC, use } from "react";
import { DialogRoot } from "../Dialog";

type TDialogCtxProps = Pick<TUseDisclosureReturn, "isOpen" | "close" | "open"> & {
  isOpen: boolean;
};

const DialogContext = createContext<TDialogCtxProps>({
  isOpen: false,
  close: () => {},
  open: () => {},
});

export type TDialogProviderProps = Omit<DialogProps, "open"> &
  Pick<TUseDisclosureProps, "onOpen" | "onClose"> & {
    isDialogOpen?: boolean;
  };

export const DialogProvider: FC<TDialogProviderProps> = ({
  children,
  isDialogOpen,
  defaultOpen,
  onOpenChange,
  onOpen,
  onClose,
  modal,
}) => {
  const { toggle, ...context } = useDisclosure({
    isOpen: isDialogOpen,
    defaultIsOpen: defaultOpen,
    onChange: onOpenChange,
    onOpen,
    onClose,
  });

  return (
    <DialogContext value={context}>
      <DialogRoot modal={modal} open={isDialogOpen} onOpenChange={toggle}>
        {children}
      </DialogRoot>
    </DialogContext>
  );
};

export const useDialogContext = (): TDialogCtxProps => {
  const context = use(DialogContext);

  if (!context) {
    throw new Error("useDialogContext must be used within a DialogProvider");
  }

  return context;
};

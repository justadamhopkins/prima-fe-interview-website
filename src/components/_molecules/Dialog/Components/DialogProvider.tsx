import {
  type TUseDisclosureProps,
  type TUseDisclosureReturn,
  useDisclosure,
} from "@hooks/useDisclosure";
import type { DialogProps } from "@radix-ui/react-dialog";
import { createContext, type FC, use } from "react";
import { DialogRoot } from "../Dialog";

interface IDialogCtxProps extends Pick<TUseDisclosureReturn, "isOpen" | "close" | "open"> {
  isOpen: boolean;
}

const DialogContext = createContext<IDialogCtxProps>({
  isOpen: false,
  close: () => {},
  open: () => {},
});

export interface IDialogProviderProps
  extends Omit<DialogProps, "open">,
    Pick<TUseDisclosureProps, "onOpen" | "onClose"> {
  isDialogOpen?: boolean;
}

export const DialogProvider: FC<IDialogProviderProps> = ({
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

export const useDialogContext = (): IDialogCtxProps => {
  const context = use(DialogContext);

  if (!context) {
    throw new Error("useDialogContext must be used within a DialogProvider");
  }

  return context;
};

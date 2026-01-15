import type { TValueOf } from "@app/types/utils.ts";
import { OVERLAY_VARIANTS, Overlay, type TOverlayProps } from "@atoms/Overlay";
import type { DialogContentProps } from "@radix-ui/react-dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import clsx from "clsx";
import {
  AnimatePresence,
  motion,
  type Transition,
  useReducedMotion,
  type Variants,
} from "motion/react";
import type { ComponentProps, FC } from "react";
import { useDialogContext } from "./Components/DialogProvider";
import styles from "./Dialog.module.css";

export const DIALOG_VARIANTS = {
  PRIMARY: "PRIMARY",
} as const;

export type TDialogVariants = TValueOf<typeof DIALOG_VARIANTS>;

export const DIALOG_LAYOUTS = {
  CENTER: "CENTER",
  LEFT: "LEFT",
} as const;

export type TDialogLayouts = TValueOf<typeof DIALOG_LAYOUTS>;

export type TDialogProps = ComponentProps<"div"> &
  DialogContentProps & {
    overlayVariant?: TOverlayProps["variant"];
    variant: TDialogVariants;
    layout: TDialogLayouts;
  };

const baseTransition: Transition = { ease: "easeOut", duration: 0.3 };

const getDialogAnimationVariants = (
  shouldReduceMotion: boolean,
): Record<NonNullable<TDialogLayouts>, Variants> => {
  return {
    [DIALOG_LAYOUTS.CENTER]: {
      closed: {
        opacity: 0,
        scale: shouldReduceMotion ? 1 : 0.75,
        translateX: "-50%",
        translateY: "-50%",
        transition: baseTransition,
      },
      open: {
        opacity: 1,
        scale: 1,
        translateX: "-50%",
        translateY: "-50%",
        transition: baseTransition,
      },
    },
    [DIALOG_LAYOUTS.LEFT]: {
      closed: {
        opacity: 0,
        translateX: shouldReduceMotion ? 0 : "-100%",
        transition: baseTransition,
      },
      open: {
        opacity: 1,
        translateX: "0%",
        transition: baseTransition,
      },
    },
  };
};

const OVERLAY_INITIAL = { opacity: 0 };
const OVERLAY_ANIMATE = { opacity: 1 };
const OVERLAY_EXIT = { opacity: 0 };

export const DialogContent: FC<TDialogProps> = ({
  children,
  variant,
  layout,
  overlayVariant = OVERLAY_VARIANTS.PRIMARY,
  ...props
}) => {
  const { isOpen } = useDialogContext();
  const shouldReduceMotion = useReducedMotion() ?? false;
  const dialogAnimationVariants = getDialogAnimationVariants(shouldReduceMotion);

  return (
    <AnimatePresence>
      {isOpen && (
        <DialogPrimitive.Portal forceMount={true}>
          <DialogPrimitive.Overlay
            asChild={true}
            className={styles["dialog__overlay--opacity-low"]}
          >
            <Overlay
              as={motion.div}
              variant={overlayVariant}
              initial={OVERLAY_INITIAL}
              animate={OVERLAY_ANIMATE}
              exit={OVERLAY_EXIT}
              transition={baseTransition}
            />
          </DialogPrimitive.Overlay>

          <DialogPrimitive.Content
            {...props}
            className={clsx([
              styles.dialog,
              styles[`dialog--${variant.toLowerCase()}`],
              styles[`dialog--layout-${layout.toLowerCase()}`],
            ])}
            asChild={true}
            forceMount={true}
          >
            <motion.div
              variants={dialogAnimationVariants[layout || "modal"]}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {children}
            </motion.div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      )}
    </AnimatePresence>
  );
};

export const DialogRoot = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.DialogDescription;
export const DialogClose = DialogPrimitive.Close;

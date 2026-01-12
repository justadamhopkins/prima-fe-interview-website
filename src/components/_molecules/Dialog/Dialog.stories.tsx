import { BUTTON_VARIANTS, Button } from "@atoms/Button";
import { OVERLAY_VARIANTS } from "@atoms/Overlay";
import { TSHIRT_SIZES } from "@constants/settings.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  DIALOG_LAYOUTS,
  DIALOG_VARIANTS,
  DialogClose,
  DialogContent,
  DialogProvider,
  DialogTitle,
  DialogTrigger,
  type TDialogProps,
} from ".";

const meta: Meta<typeof DialogContent> = {
  component: DialogContent,
  title: "Molecules/Dialog",
  parameters: {
    layout: "centered",
  },
  args: {
    layout: DIALOG_LAYOUTS.CENTER,
    variant: DIALOG_VARIANTS.PRIMARY,
  },
  argTypes: {
    overlayVariant: {
      control: "select",
      options: Object.values(OVERLAY_VARIANTS),
    },
    layout: {
      control: "select",
      options: Object.values(DIALOG_LAYOUTS),
    },
    variant: {
      control: "select",
      options: Object.keys(DIALOG_VARIANTS),
    },
  },
  render: (args: TDialogProps) => {
    return (
      <DialogProvider>
        <DialogTrigger asChild={true}>
          <Button variant={BUTTON_VARIANTS.PRIMARY} size={TSHIRT_SIZES.SM}>
            Show dialog
          </Button>
        </DialogTrigger>
        <DialogContent {...args}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              gap: 6,
              alignItems: "center",
            }}
          >
            <DialogTitle style={{ flexGrow: 1, textAlign: "center" }}>
              I am the {args.layout} variant
            </DialogTitle>
            <DialogClose asChild={true} aria-label="close dialog">
              <Button variant={BUTTON_VARIANTS.PRIMARY} size={TSHIRT_SIZES.SM}>
                Close me
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </DialogProvider>
    );
  },
};

type TStory = StoryObj<typeof DialogContent>;

export const Modal: TStory = {
  args: {},
};

export default meta;

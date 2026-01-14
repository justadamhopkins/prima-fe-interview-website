import { OVERLAY_VARIANTS } from "@atoms/Overlay";
import { ROLES } from "@constants/roles.ts";
import { DIALOG_LAYOUTS, DIALOG_VARIANTS } from "@molecules/Dialog";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { FiltersDialog } from ".";

const meta: Meta<typeof FiltersDialog> = {
  component: FiltersDialog,
  title: "Organisms/FiltersDialog",
  parameters: {
    layout: "centered",
  },
  args: {
    layout: DIALOG_LAYOUTS.LEFT,
    variant: DIALOG_VARIANTS.PRIMARY,
    selectedValue: [ROLES.ADMIN],
    values: Object.values(ROLES),
    onValueChange: fn(),
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
};

type TStory = StoryObj<typeof FiltersDialog>;

export const Modal: TStory = {
  args: {},
};

export default meta;

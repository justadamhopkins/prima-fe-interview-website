import { OVERLAY_VARIANTS } from "@atoms/Overlay";
import { MOCK_USERS } from "@constants/fixtures/users.ts";
import { DIALOG_LAYOUTS, DIALOG_VARIANTS } from "@molecules/Dialog";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserDialog } from ".";

const meta: Meta<typeof UserDialog> = {
  component: UserDialog,
  title: "Organisms/UserDialog",
  parameters: {
    layout: "centered",
  },
  args: {
    layout: DIALOG_LAYOUTS.CENTER,
    variant: DIALOG_VARIANTS.PRIMARY,
    user: MOCK_USERS[0],
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

type TStory = StoryObj<typeof UserDialog>;

export const Modal: TStory = {
  args: {},
};

export default meta;

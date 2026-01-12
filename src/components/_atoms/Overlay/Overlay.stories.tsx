import type { Meta, StoryObj } from "@storybook/react-vite";
import { OVERLAY_VARIANTS, Overlay } from ".";

const meta: Meta<typeof Overlay> = {
  component: Overlay,
  title: "Atoms/Overlay",
  args: {
    variant: OVERLAY_VARIANTS.PRIMARY,
  },
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: Object.keys(OVERLAY_VARIANTS),
    },
  },
};

type TStory = StoryObj<typeof Overlay>;

export const Primary: TStory = {};

export default meta;

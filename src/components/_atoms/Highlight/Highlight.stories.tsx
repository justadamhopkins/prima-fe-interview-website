import type { Meta, StoryObj } from "@storybook/react-vite";
import { HIGHLIGHT_VARIANTS, Highlight } from ".";

const meta = {
  title: "Atoms/Highlight",
  component: Highlight,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Highlight me",
  },
  argTypes: {
    children: { control: "text" },
    variant: { control: "select", options: Object.values(HIGHLIGHT_VARIANTS) },
  },
} satisfies Meta<typeof Highlight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: HIGHLIGHT_VARIANTS.PRIMARY,
  },
};

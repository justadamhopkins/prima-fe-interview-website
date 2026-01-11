import { TSHIRT_SIZES } from "@constants/settings.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BUTTON_VARIANTS, Button } from ".";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Search",
  },
  argTypes: {
    children: { control: "text" },
    variant: { control: "select", options: [BUTTON_VARIANTS.PRIMARY] },
    size: { control: "select", options: [TSHIRT_SIZES.SM, TSHIRT_SIZES.LG] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: BUTTON_VARIANTS.PRIMARY,
    size: TSHIRT_SIZES.LG,
  },
};

export const Small: Story = {
  args: {
    variant: BUTTON_VARIANTS.PRIMARY,
    size: TSHIRT_SIZES.SM,
  },
};

export const Large: Story = {
  args: {
    variant: BUTTON_VARIANTS.PRIMARY,
    size: TSHIRT_SIZES.LG,
  },
};

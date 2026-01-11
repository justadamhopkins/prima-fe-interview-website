import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from ".";

const meta = {
  title: "Atoms/Forms/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "What are you looking for?",
  },
};

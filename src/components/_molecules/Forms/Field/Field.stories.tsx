import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Field } from ".";

const meta = {
  title: "Molecules/Forms/Field",
  component: Field,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    type: "text",
    label: "WHAT ARE YOU LOOKING FOR?",
    id: "test-input",
    onChange: fn(),
  },
  argTypes: {
    label: { control: "text" },
  },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

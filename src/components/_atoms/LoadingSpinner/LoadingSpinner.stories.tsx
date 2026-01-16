import type { Meta, StoryObj } from "@storybook/react-vite";
import { LoadingSpinner } from ".";

const meta = {
  title: "Atoms/LoadingSpinner",
  component: LoadingSpinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Highlight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

import type { Meta, StoryObj } from "@storybook/react-vite";
import { DetailTerm } from ".";

const meta = {
  title: "Atoms/DetailTerm",
  component: DetailTerm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
  },
} satisfies Meta<typeof DetailTerm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Team",
    children: "Finance",
  },
};

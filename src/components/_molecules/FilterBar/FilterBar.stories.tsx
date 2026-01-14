import { ROLES } from "@constants/roles.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { FilterBar } from ".";

const meta = {
  title: "Molecules/FilterBar",
  component: FilterBar,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    roles: Object.values(ROLES),
    handleFilterSelection: fn(),
  },
  argTypes: {},
} satisfies Meta<typeof FilterBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

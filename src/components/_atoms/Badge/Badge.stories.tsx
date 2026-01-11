import { ROLES } from "@app/constants/roles.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from ".";

const meta = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    variant: { control: "select", options: Object.values(ROLES) },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Admin: Story = {
  args: {
    label: ROLES.ADMIN,
    variant: ROLES.ADMIN,
  },
};

export const Editor: Story = {
  args: {
    label: ROLES.EDITOR,
    variant: ROLES.EDITOR,
  },
};

export const Viewer: Story = {
  args: {
    label: ROLES.VIEWER,
    variant: ROLES.VIEWER,
  },
};

export const Guest: Story = {
  args: {
    label: ROLES.GUEST,
    variant: ROLES.GUEST,
  },
};

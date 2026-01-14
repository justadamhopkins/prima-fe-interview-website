import { ROLES } from "@constants/roles.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { FilterChips } from ".";

const meta: Meta<typeof FilterChips> = {
  component: FilterChips,
  title: "Molecules/FilterChips",
  parameters: {
    layout: "centered",
  },
  args: {
    selectedValue: [ROLES.ADMIN],
    values: Object.values(ROLES),
    onValueChange: fn(),
  },
};

type TStory = StoryObj<typeof FilterChips>;

export const Modal: TStory = {
  args: {},
};

export default meta;

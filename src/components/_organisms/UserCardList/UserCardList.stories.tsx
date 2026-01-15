import { MOCK_USERS } from "@constants/fixtures/users.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserCardList } from ".";

const meta: Meta<typeof UserCardList> = {
  component: UserCardList,
  title: "Organisms/UserCardList",
  parameters: {
    layout: "padded",
  },
  args: {
    users: MOCK_USERS,
  },
  argTypes: {},
};

type TStory = StoryObj<typeof UserCardList>;

export const Primary: TStory = {
  args: {},
};

export default meta;

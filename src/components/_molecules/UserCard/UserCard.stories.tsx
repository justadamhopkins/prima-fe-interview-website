import { MOCK_USERS } from "@constants/fixtures/users.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { type TUserCardProps, UserCard } from ".";

const meta: Meta<typeof UserCard> = {
  component: UserCard,
  title: "Molecules/UserCard",
  parameters: {
    layout: "padded",
  },
  args: {
    user: MOCK_USERS[0],
  },
  argTypes: {},
  render: (args: TUserCardProps) => {
    return (
      <UserCard {...args}>
        <UserCard.Header />
        <UserCard.Details />
        <UserCard.Footer handleCardAction={fn()} />
      </UserCard>
    );
  },
};

type TStory = StoryObj<typeof UserCard>;

export const Primary: TStory = {
  args: {},
};

export default meta;

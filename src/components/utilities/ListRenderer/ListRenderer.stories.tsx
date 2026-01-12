import type { Meta, StoryObj } from "@storybook/react-vite";

import { ListRenderer } from ".";

const meta: Meta<typeof ListRenderer> = {
  component: ListRenderer,
  title: "Utilities/ListRenderer",
  args: {},
  argTypes: {},
  render: () => {
    return (
      <ul>
        <ListRenderer
          items={[{ name: "Luke skywalker" }, { name: "Darth vader" }]}
          render={({ item: { name } }) => <li key={name}>{name}</li>}
        />
      </ul>
    );
  },
};

type TStory = StoryObj<typeof ListRenderer>;

export const Primary: TStory = {};

export default meta;

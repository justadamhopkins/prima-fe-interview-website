import { Badge } from "@atoms/Badge";
import { RawButton } from "@atoms/RawButton";
import { ListRenderer } from "@components/utilities/ListRenderer";
import { ROLES, type TRoleType } from "@constants/roles.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { ToggleGroupItem, ToggleGroupMulti } from ".";

const meta: Meta<typeof ToggleGroupMulti> = {
  component: ToggleGroupMulti,
  title: "Utilities/ToggleGroupMulti",
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {},
};

type TStory = StoryObj<typeof ToggleGroupMulti>;

const StatefulRender = () => {
  const [selectedMethod, setSelectedMethod] = useState<TRoleType[]>([ROLES.ADMIN]);

  return (
    <ToggleGroupMulti selectedValue={selectedMethod} onValueChange={setSelectedMethod}>
      <ListRenderer<TRoleType>
        items={Object.values(ROLES)}
        render={({ item }) => (
          <ToggleGroupItem asChild={true} value={item}>
            <RawButton>
              <Badge label={item} variant={item} isActive={selectedMethod.includes(item)} />
            </RawButton>
          </ToggleGroupItem>
        )}
      />
    </ToggleGroupMulti>
  );
};
export const Primary: TStory = {
  args: {},
  render: (args) => <StatefulRender {...args} />,
};

export default meta;

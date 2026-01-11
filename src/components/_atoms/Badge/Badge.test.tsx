import { ROLES } from "@app/constants/roles.ts";
import { componentRenderer, screen } from "@app/tests/config/custom-render";
import type { ComponentProps } from "react";
import { Badge } from ".";

const mockProps: ComponentProps<typeof Badge> = {
  label: "test",
  variant: ROLES.ADMIN,
};

const setup = componentRenderer(Badge, mockProps);

describe(Badge, () => {
  describe("on success", () => {
    beforeEach(() => setup());

    it("should render the badge component", () => {
      const label = screen.getByText(mockProps.label);

      expect(label).toBeVisible();
    });
  });
});

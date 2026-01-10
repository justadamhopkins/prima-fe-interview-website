import { componentRenderer, screen } from "@app/tests/config/custom-render";
import type { ComponentProps } from "react";
import { Badge } from ".";

const mockProps: ComponentProps<typeof Badge> = {
  copy: "test",
};

const setup = componentRenderer(Badge, mockProps);

describe(Badge, () => {
  describe("on success", () => {
    beforeEach(() => setup());

    it("should render the badge component", () => {
      const test = screen.getByText(mockProps.copy);

      expect(test).toBeVisible();
    });
  });
});

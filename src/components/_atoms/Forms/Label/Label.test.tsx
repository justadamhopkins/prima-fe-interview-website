import { componentRenderer, screen } from "@app/tests/config/custom-render";
import type { ComponentProps } from "react";
import { Label } from ".";

const mockProps: ComponentProps<typeof Label> = {
  children: "test label",
};

const setup = componentRenderer(Label, mockProps);

describe(Label, () => {
  describe("on success", () => {
    beforeEach(() => setup());

    it("should render the label component", () => {
      const label = screen.getByText("test label");

      expect(label).toBeVisible();
    });
  });
});

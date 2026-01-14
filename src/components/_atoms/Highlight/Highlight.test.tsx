import { componentRenderer, screen } from "@app/tests/config/custom-render";
import type { ComponentProps } from "react";
import { HIGHLIGHT_VARIANTS, Highlight } from ".";

const mockProps: ComponentProps<typeof Highlight> = {
  children: "highlight me",
  variant: HIGHLIGHT_VARIANTS.PRIMARY,
};

const setup = componentRenderer(Highlight, mockProps);

describe(Highlight, () => {
  describe("on success", () => {
    beforeEach(() => setup());

    it("should render the highlight component", () => {
      const text = screen.getByText("highlight me");

      expect(text).toBeVisible();
    });
  });
});

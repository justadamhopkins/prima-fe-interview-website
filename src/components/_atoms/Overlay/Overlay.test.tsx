import { componentRenderer, screen } from "@app/tests/config/custom-render";
import type { ComponentProps } from "react";
import { OVERLAY_VARIANTS, Overlay } from ".";

const mockProps: ComponentProps<typeof Overlay> = {
  variant: OVERLAY_VARIANTS.PRIMARY,
};

const setup = componentRenderer(Overlay, mockProps);

describe(Overlay, () => {
  describe("on success", () => {
    beforeEach(() => setup());

    it("should render the overlay component", () => {
      const overlayElement = screen.getByTestId("overlay");

      expect(overlayElement).toBeVisible();
    });
  });
});

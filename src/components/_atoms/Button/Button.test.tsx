import { componentRenderer, fireEvent, screen } from "@app/tests/config/custom-render";
import { TSHIRT_SIZES } from "@constants/settings.ts";
import type { ComponentProps } from "react";
import { BUTTON_VARIANTS, Button } from ".";

const mockOnClick = vi.fn();

const mockProps: ComponentProps<typeof Button> = {
  children: "test button",
  variant: BUTTON_VARIANTS.PRIMARY,
  size: TSHIRT_SIZES.LG,
  onClick: mockOnClick,
};

const setup = componentRenderer(Button, mockProps);

describe(Button, () => {
  describe("on success", () => {
    beforeEach(() => setup());

    it("should render the button component", () => {
      const label = screen.getByText("test button");

      expect(label).toBeVisible();
    });
    describe("when a user interacts with the button", () => {
      it("should trigger an action", () => {
        fireEvent.click(screen.getByText("test button"));

        expect(mockOnClick).toHaveBeenCalledTimes(1);
      });
    });
  });
});

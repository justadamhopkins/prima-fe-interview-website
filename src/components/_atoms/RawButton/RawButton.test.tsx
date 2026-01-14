import { componentRenderer, fireEvent, screen } from "@app/tests/config/custom-render";
import type { ComponentProps } from "react";
import { RawButton } from ".";

const mockOnClick = vi.fn();

const mockProps: ComponentProps<typeof RawButton> = {
  children: "test button",
  onClick: mockOnClick,
};

const setup = componentRenderer(RawButton, mockProps);

describe(RawButton, () => {
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

import { componentRenderer, screen, userEvent } from "@app/tests/config/custom-render";
import type { ComponentProps } from "react";
import { SearchInput } from ".";

const mockOnValueChange = vi.fn();
const mockFormSubmit = vi.fn();

const mockProps: ComponentProps<typeof SearchInput> = {
  value: "",
  onChange: mockOnValueChange,
  handleSearchSubmit: mockFormSubmit,
};

const setup = componentRenderer(SearchInput, mockProps);

describe(SearchInput, () => {
  describe("on success", () => {
    beforeEach(() => setup());

    it("should render the search component", () => {
      const label = screen.getByLabelText("WHAT ARE YOU LOOKING FOR?");

      expect(label).toBeVisible();
    });

    describe("when a user interacts with the input", () => {
      it("should trigger an action", async () => {
        const user = userEvent.setup();

        await user.type(screen.getByLabelText("WHAT ARE YOU LOOKING FOR?"), "alice");

        expect(mockOnValueChange).toHaveBeenCalledTimes(5);
      });
    });
    describe("when a user interacts with the form sumbit", () => {
      it("should trigger form submittal", async () => {
        const user = userEvent.setup();

        await user.type(screen.getByLabelText("WHAT ARE YOU LOOKING FOR?"), "alice");
        await userEvent.keyboard("{Enter}");

        expect(mockFormSubmit).toHaveBeenCalledTimes(1);
      });
    });
  });
});

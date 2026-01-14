import { ROLES } from "@app/constants/roles.ts";
import { componentRenderer, screen, userEvent } from "@app/tests/config/custom-render";
import type { ComponentProps } from "react";
import { FilterBar } from ".";

const mockOnValueChange = vi.fn();

const mockProps: ComponentProps<typeof FilterBar> = {
  values: Object.values(ROLES),
  selectedValue: [ROLES.ADMIN],
  onValueChange: mockOnValueChange,
};

const setup = componentRenderer(FilterBar, mockProps);

describe(FilterBar, () => {
  describe("on success", () => {
    beforeEach(() => setup());

    it("should render the filter label component", () => {
      const label = screen.getByText("Filter by:");

      expect(label).toBeVisible();
    });

    it("should render the filter bar component", () => {
      const label = screen.getByText(ROLES.ADMIN);

      expect(label).toBeVisible();
    });

    describe("when a user interacts with the chips", () => {
      it("should select a filter chip", async () => {
        const user = userEvent.setup();

        await user.click(screen.getByRole("button", { name: ROLES.EDITOR }));

        expect(mockOnValueChange).toHaveBeenCalledWith([ROLES.ADMIN, ROLES.EDITOR]);
      });
    });
  });
});

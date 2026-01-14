import { ROLES } from "@app/constants/roles.ts";
import { componentRenderer, screen, userEvent } from "@app/tests/config/custom-render";
import { DIALOG_LAYOUTS, DIALOG_VARIANTS } from "@molecules/Dialog";
import type { ComponentProps } from "react";
import { FiltersDialog } from ".";

const mockOnValueChange = vi.fn();

const mockProps: ComponentProps<typeof FiltersDialog> = {
  values: Object.values(ROLES),
  selectedValue: [ROLES.ADMIN],
  onValueChange: mockOnValueChange,
  layout: DIALOG_LAYOUTS.LEFT,
  variant: DIALOG_VARIANTS.PRIMARY,
};

const setup = componentRenderer(FiltersDialog, mockProps);

describe(FiltersDialog, () => {
  describe("on success", () => {
    beforeEach(() => setup());

    it("should render the closed dialog state", () => {
      const label = screen.getByRole("button", { name: "Show filters" });

      expect(label).toBeVisible();
    });

    describe("when a user interacts with the dialog", () => {
      it("should open", async () => {
        const user = userEvent.setup();

        await user.click(screen.getByRole("button", { name: "Show filters" }));

        expect(screen.getByText("Filters")).toBeVisible();
      });
      it("should contain a list of filters", async () => {
        const user = userEvent.setup();

        await user.click(screen.getByRole("button", { name: "Show filters" }));

        expect(screen.getByLabelText(ROLES.ADMIN)).toHaveAttribute("data-state", "on");
      });
    });
  });
});

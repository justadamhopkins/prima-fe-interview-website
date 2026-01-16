import { componentRenderer, screen, userEvent } from "@app/tests/config/custom-render";
import { MOCK_USERS } from "@constants/fixtures/users.ts";
import { DIALOG_LAYOUTS, DIALOG_VARIANTS } from "@molecules/Dialog";
import type { ComponentProps } from "react";
import { UserDialog } from ".";

const mockProps: ComponentProps<typeof UserDialog> = {
  user: MOCK_USERS[0],
  layout: DIALOG_LAYOUTS.CENTER,
  variant: DIALOG_VARIANTS.PRIMARY,
};

const setup = componentRenderer(UserDialog, mockProps);

describe(UserDialog, () => {
  describe("on success", () => {
    beforeEach(() => setup());

    it("should render the closed dialog state", () => {
      const label = screen.getByRole("button", { name: "View details" });

      expect(label).toBeVisible();
    });

    describe("when a user interacts with the dialog", () => {
      it("should contain user information", async () => {
        const user = userEvent.setup();

        await user.click(screen.getByRole("button", { name: "View details" }));

        expect(await screen.findByText("George Harris")).toBeVisible();
      });
    });
  });
});

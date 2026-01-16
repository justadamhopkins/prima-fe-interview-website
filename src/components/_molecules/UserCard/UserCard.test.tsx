import { ROLES } from "@app/constants/roles.ts";
import { componentRenderer, screen, userEvent } from "@app/tests/config/custom-render";
import { MOCK_USERS } from "@constants/fixtures/users.ts";
import type { ComponentProps } from "react";
import { UserCard } from ".";

const mockProps: ComponentProps<typeof UserCard> = {
  user: MOCK_USERS[0],
};

const mockAction = vi.fn();

const UserCardComponent = ({ user }: ComponentProps<typeof UserCard>) => (
  <UserCard user={user}>
    <UserCard.Header />
    <UserCard.Details />
    <UserCard.Footer handleCardAction={mockAction} />
  </UserCard>
);

const setup = componentRenderer(UserCardComponent, mockProps);

describe(UserCard, () => {
  describe("on success", () => {
    beforeEach(() => setup());

    it("should render the UserCard component", () => {
      const label = screen.getByText(ROLES.ADMIN);

      expect(label).toBeVisible();
    });

    it("should render the title", () => {
      const label = screen.getByText("Software Engineer");

      expect(label).toBeVisible();
    });

    describe("when a user interacts with the card", () => {
      it("should select trigger an action", async () => {
        const user = userEvent.setup();

        await user.click(screen.getByRole("button", { name: "View details" }));

        expect(mockAction).toHaveBeenCalledTimes(1);
      });
    });
  });
});

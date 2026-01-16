import { componentRenderer, screen } from "@app/tests/config/custom-render";
import type { ComponentProps } from "react";
import { SiteContainer } from ".";

const mockProps: ComponentProps<typeof SiteContainer> = {
  children: "test container",
};

const setup = componentRenderer(SiteContainer, mockProps);

describe(SiteContainer, () => {
  describe("on success", () => {
    beforeEach(() => setup());

    it("should render the site container component", () => {
      const label = screen.getByText("test container");

      expect(label).toBeVisible();
    });
  });
});

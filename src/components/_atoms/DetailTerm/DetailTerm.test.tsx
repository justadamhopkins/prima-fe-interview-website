import { componentRenderer, screen } from "@app/tests/config/custom-render";
import type { ComponentProps } from "react";
import { DetailTerm } from ".";

const mockProps: ComponentProps<typeof DetailTerm> = {
  label: "test",
  children: "mock children",
};

const setup = componentRenderer(DetailTerm, mockProps);

describe(DetailTerm, () => {
  describe("on success", () => {
    beforeEach(() => setup());

    it("should render the detail term component", () => {
      const label = screen.getByText(`${mockProps.label}:`);
      const children = screen.getByText("mock children");

      expect(label).toBeVisible();
      expect(children).toBeVisible();
    });
  });
});

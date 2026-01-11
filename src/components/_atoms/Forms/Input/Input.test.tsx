import { componentRenderer, screen } from "@app/tests/config/custom-render";
import type { ComponentProps } from "react";
import { Input } from ".";

const mockProps: ComponentProps<typeof Input> = {
  type: "text",
  id: "test-input",
  placeholder: "test input placeholder",
};

const setup = componentRenderer(Input, mockProps);

describe(Input, () => {
  describe("on success", () => {
    beforeEach(() => setup());

    it("should render the input component", () => {
      const input = screen.getByPlaceholderText("test input placeholder");

      expect(input).toBeVisible();
    });
  });
});

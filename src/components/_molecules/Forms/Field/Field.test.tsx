import { componentRenderer, screen } from "@app/tests/config/custom-render";
import type { ComponentProps } from "react";
import { Field } from ".";

const mockOnChange = vi.fn(() => "test");

const mockProps: ComponentProps<typeof Field> = {
  type: "text",
  id: "test-input",
  placeholder: "test input placeholder",
  label: "test label",
  onChange: mockOnChange,
};

const setup = componentRenderer(Field, mockProps);

describe(Field, () => {
  describe("on success", () => {
    beforeEach(() => setup());

    it("should render the field component", () => {
      const input = screen.getByPlaceholderText("test input placeholder");

      expect(input).toBeVisible();
    });
    it("should render the label component", () => {
      const label = screen.getByLabelText("test label");

      expect(label).toBeVisible();
    });
  });
});

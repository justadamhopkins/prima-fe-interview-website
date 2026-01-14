import { componentRenderer, screen, userEvent } from "@tests/config/custom-render.tsx";
import type { ComponentProps } from "react";
import { ToggleGroupItem, ToggleGroupMulti } from ".";

const mockOnChange = vi.fn();

const ToggleGroupMultiTestComp = (props: ComponentProps<typeof ToggleGroupMulti>) => {
  return (
    <ToggleGroupMulti {...props}>
      <ToggleGroupItem value="option1" aria-label="Option 1">
        Option 1
      </ToggleGroupItem>
      <ToggleGroupItem value="option2" aria-label="Option 2">
        Option 2
      </ToggleGroupItem>
    </ToggleGroupMulti>
  );
};

const setup = componentRenderer<ComponentProps<typeof ToggleGroupMulti>>(ToggleGroupMultiTestComp, {
  onValueChange: mockOnChange,
  selectedValue: ["option1"],
});

describe(`<${ToggleGroupMulti.name} />`, () => {
  describe("on success", () => {
    beforeEach(() => setup());

    it("should render children", () => {
      expect(screen.getByText("Option 1")).toBeVisible();
      expect(screen.getByText("Option 2")).toBeVisible();
    });
    it("should set the selected value", () => {
      expect(screen.getByLabelText(/option 1/i)).toHaveAttribute("data-state", "on");
      expect(screen.getByLabelText(/option 2/i)).toHaveAttribute("data-state", "off");
    });

    it("should allow the user to select toggle items", async () => {
      const user = userEvent.setup();

      await user.click(screen.getByText("Option 2"));

      expect(mockOnChange).toHaveBeenCalledWith(["option1", "option2"]);
    });
    it("should allow for keyboard interactions", async () => {
      const user = userEvent.setup();

      await user.tab();

      await user.keyboard("{ArrowRight}");
      await user.keyboard("{Enter}");

      expect(mockOnChange).toHaveBeenCalledWith(["option1", "option2"]);
    });
  });
});

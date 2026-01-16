import { componentRenderer, screen } from "@app/tests/config/custom-render";
import { LoadingSpinner } from ".";

const setup = componentRenderer(LoadingSpinner, {});

describe(LoadingSpinner, () => {
  describe("on success", () => {
    beforeEach(() => setup());

    it("should render the loading spinner component", () => {
      const text = screen.getByTestId("loadingSpinner");

      expect(text).toBeVisible();
    });
  });
});

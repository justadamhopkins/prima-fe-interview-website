import { componentRenderer, screen, userEvent } from "@tests/config/custom-render.tsx";
import { server } from "@tests/server/node.ts";
import { HttpResponse, http } from "msw";
import { HomePage } from "./HomePage";

const setup = componentRenderer(HomePage);

describe(HomePage, () => {
  beforeEach(() => setup());

  describe("on success", () => {
    it("should render the homepage dashboard", () => {
      const title = screen.getByRole("heading", { level: 1, name: "User Dashboard" });

      expect(title).toBeVisible();
    });
    it("should render the search form", () => {
      const label = screen.getByLabelText(/what are you looking for?/i);

      expect(label).toBeVisible();
    });
    describe("when a user interacts with the input", () => {
      describe("and they submit the form", () => {
        describe("and there are results", () => {
          it("should render the search results", async () => {
            const user = userEvent.setup();

            await user.type(screen.getByLabelText("WHAT ARE YOU LOOKING FOR?"), "George");
            await userEvent.keyboard("{Enter}");

            expect(await screen.findByText("George Harris")).toBeVisible();
          });
        });
        describe("and there are no results", () => {
          it("should render the no search results", async () => {
            const user = userEvent.setup();

            await user.type(screen.getByLabelText("WHAT ARE YOU LOOKING FOR?"), "Crazy bear");
            await userEvent.keyboard("{Enter}");

            expect(
              await screen.findByText("No search results found please try again!"),
            ).toBeVisible();
          });
        });
      });
      describe("when a user adds filters into the scenario", () => {
        it("should include the filters alongside the search query", async () => {
          const user = userEvent.setup();

          await user.type(screen.getByLabelText("WHAT ARE YOU LOOKING FOR?"), "E");
          await userEvent.keyboard("{Enter}");
          await userEvent.click(screen.getByRole("button", { name: "GUEST" }));

          expect(await screen.findByText("Emma Clark")).toBeVisible();
          expect(await screen.findByText("Serena Parisi")).toBeVisible();
        });
        it("should include the no search results in this scenario", async () => {
          const user = userEvent.setup();

          await user.type(screen.getByLabelText("WHAT ARE YOU LOOKING FOR?"), "E");
          await userEvent.keyboard("{Enter}");
          await userEvent.click(screen.getByRole("button", { name: "GUEST" }));

          expect(await screen.findByText("Emma Clark")).toBeVisible();
          expect(await screen.findByText("Serena Parisi")).toBeVisible();

          await userEvent.click(screen.getByRole("button", { name: "GUEST" }));
          await userEvent.click(screen.getByRole("button", { name: "EDITOR" }));

          expect(
            await screen.findByText("No search results found please try again!"),
          ).toBeVisible();
        });
      });
      describe("when an error occurs during the submission process", () => {
        beforeEach(() => {
          server.use(
            http.get("https://api.prima.com/users", () => {
              return new HttpResponse(null, { status: 500 });
            }),
          );
        });

        it.only("should render the error message", async () => {
          const user = userEvent.setup();

          await user.type(screen.getByLabelText("WHAT ARE YOU LOOKING FOR?"), "George");
          await userEvent.keyboard("{Enter}");

          expect(
            await screen.findByText("An error has occurred. Please retry in a few moments!"),
          ).toBeVisible();
        });
      });
    });
  });
});

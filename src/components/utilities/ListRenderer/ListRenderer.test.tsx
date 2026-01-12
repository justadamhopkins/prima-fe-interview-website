import { componentRenderer, screen } from "@tests/config/custom-render.tsx";
import { isString } from "@utils/primitives/boolean";
import type { ComponentProps } from "react";
import { ListRenderer } from ".";

type TMockItem = { id: string; name: string };

type TListRendererProps<T> = ComponentProps<typeof ListRenderer<T>>;

const mockObjectArrItems: TMockItem[] = [
  { id: "100", name: "Luke skywalker" },
  { id: "200", name: "Darth vader" },
];

const mockStringArrItems = ["Luke skywalker", "Darth vader"];

const defaultObjectArrProps: TListRendererProps<TMockItem | string> = {
  items: mockObjectArrItems,

  render: ({ item }) => {
    if (isString(item) || !item.name) {
      return null;
    }

    return (
      <ul>
        <li>{item.name}</li>
      </ul>
    );
  },
};

const setup = componentRenderer<TListRendererProps<TMockItem | string>>(
  ListRenderer,
  defaultObjectArrProps,
);

describe(`<${ListRenderer.name}/>`, () => {
  describe("when passed an array of objects", () => {
    beforeEach(() => {
      setup();
    });

    it("should render a list of components", () => {
      mockObjectArrItems.forEach(({ name }) => {
        expect(screen.getByText(name)).toBeVisible();
      });
    });
  });

  describe("when passed an array of strings", () => {
    beforeEach(() => {
      setup({
        items: mockStringArrItems,

        render: ({ item }) => {
          if (!isString(item)) {
            return null;
          }

          return (
            <ul>
              <li>{item}</li>
            </ul>
          );
        },
      });
    });

    it("should render a list of components", () => {
      mockStringArrItems.forEach((name) => {
        expect(screen.getByText(name)).toBeVisible();
      });
    });
  });
});

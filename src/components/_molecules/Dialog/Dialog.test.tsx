import { BUTTON_VARIANTS, Button } from "@atoms/Button";
import { TSHIRT_SIZES } from "@constants/settings.ts";
import { componentRenderer, fireEvent, screen, waitFor } from "@tests/config/custom-render";
import {
  DIALOG_LAYOUTS,
  DIALOG_VARIANTS,
  DialogClose,
  DialogContent,
  DialogProvider,
  DialogTitle,
  DialogTrigger,
  type IDialogProviderProps,
} from ".";

const DialogTestComponent = (props: IDialogProviderProps) => (
  <DialogProvider isDialogOpen={props.isDialogOpen} onOpenChange={props.onOpenChange}>
    <DialogTrigger asChild={true}>
      <Button variant={BUTTON_VARIANTS.PRIMARY} size={TSHIRT_SIZES.SM}>
        Open dialog
      </Button>
    </DialogTrigger>
    <DialogContent
      layout={DIALOG_LAYOUTS.CENTER}
      variant={DIALOG_VARIANTS.PRIMARY}
      aria-describedby={undefined}
    >
      <DialogTitle>modal child</DialogTitle>
      <DialogClose>Close button</DialogClose>
    </DialogContent>
  </DialogProvider>
);

const setup = componentRenderer<IDialogProviderProps>(DialogTestComponent, {});

describe("Dialog", () => {
  describe("on success", () => {
    describe("when uncontrolled", () => {
      beforeEach(() => {
        setup();
      });

      it("should render children", async () => {
        await waitFor(() => {
          expect(screen.queryByText(/modal child/i)).not.toBeInTheDocument();
        });

        fireEvent.click(screen.getByText(/open dialog/i));

        await waitFor(() => {
          expect(screen.getByText(/modal child/i)).toBeVisible();
        });
      });
      it("should close the dialog", async () => {
        fireEvent.click(screen.getByText(/open dialog/i));

        await waitFor(() => {
          expect(screen.getByText(/modal child/i)).toBeVisible();
        });

        fireEvent.click(screen.getByText(/close button/i));

        await waitFor(() => {
          expect(screen.queryByText(/modal child/i)).not.toBeInTheDocument();
        });
      });
    });
  });
});

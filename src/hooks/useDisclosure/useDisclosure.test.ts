import { act, renderHook } from "@tests/config/custom-render";
import { useDisclosure } from ".";

describe(useDisclosure, () => {
  describe("when uncontrolled", () => {
    it("should initialise with default closed state", () => {
      const { result } = renderHook(() => useDisclosure());

      expect(result.current.isOpen).toBe(false);
    });

    it("should initialise with defaultIsOpen when provided", () => {
      const { result } = renderHook(() => useDisclosure({ defaultIsOpen: true }));

      expect(result.current.isOpen).toBe(true);
    });

    it("should toggle state when toggle is called", () => {
      const { result } = renderHook(() => useDisclosure());

      act(() => {
        result.current.toggle();
      });
      expect(result.current.isOpen).toBe(true);

      act(() => {
        result.current.toggle();
      });
      expect(result.current.isOpen).toBe(false);
    });

    it("should call onOpen callback when opening", () => {
      const onOpen = vi.fn();
      const { result } = renderHook(() => useDisclosure({ onOpen }));

      act(() => {
        result.current.open();
      });

      expect(onOpen).toHaveBeenCalledTimes(1);
      expect(result.current.isOpen).toBe(true);
    });

    it("should call onClose callback when closing", () => {
      const onClose = vi.fn();
      const { result } = renderHook(() => useDisclosure({ defaultIsOpen: true, onClose }));

      act(() => {
        result.current.close();
      });

      expect(onClose).toHaveBeenCalledTimes(1);
      expect(result.current.isOpen).toBe(false);
    });

    it("should call onChange callback with new value", () => {
      const onChange = vi.fn();
      const { result } = renderHook(() => useDisclosure({ onChange }));

      act(() => {
        result.current.open();
      });

      expect(onChange).toHaveBeenCalledWith(true);

      act(() => {
        result.current.close();
      });

      expect(onChange).toHaveBeenCalledWith(false);
      expect(onChange).toHaveBeenCalledTimes(2);
    });
  });

  describe("when controlled", () => {
    it("should use controlled value when isOpen is provided", () => {
      const { result, rerender } = renderHook((props) => useDisclosure(props), {
        initialProps: { isOpen: false },
      });

      expect(result.current.isOpen).toBe(false);

      rerender({ isOpen: true });
      expect(result.current.isOpen).toBe(true);
    });

    it("should ignore defaultIsOpen when in controlled mode", () => {
      const { result } = renderHook(() => useDisclosure({ isOpen: false, defaultIsOpen: true }));

      expect(result.current.isOpen).toBe(false);
    });

    it("should call onOpen and onChange but not change state in controlled mode", () => {
      const onOpen = vi.fn();
      const onChange = vi.fn();
      const { result } = renderHook(() => useDisclosure({ isOpen: false, onOpen, onChange }));

      act(() => {
        result.current.open();
      });

      expect(result.current.isOpen).toBe(false);
      expect(onOpen).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(true);
    });
  });
});

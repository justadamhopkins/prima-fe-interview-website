import { type RenderOptions, type RenderResult, render } from "@testing-library/react";
import { type RenderHookOptions, renderHook } from "@testing-library/react-hooks";
import userEvent from "@testing-library/user-event";

import type { ComponentType, PropsWithChildren, ReactElement, ReactNode } from "react";

const WrapperComponent = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

const customRender = (ui: ReactElement, options: RenderOptions = {}): RenderResult =>
  render(ui, {
    wrapper: ({ children }) => <WrapperComponent>{children}</WrapperComponent>,
    ...options,
  });

function customRenderHook<TProps extends { children?: ReactNode }, TResult>(
  callback: (props: TProps) => TResult,
  options?: RenderHookOptions<TProps>,
) {
  return renderHook(callback, {
    wrapper: ({ children }: TProps) => (
      <WrapperComponent {...options?.initialProps}>{children}</WrapperComponent>
    ),
    ...options,
  });
}

export function componentRenderer<Props>(
  C: ComponentType<Props>,
  defaultProps: Props = {} as Props & { children?: ReactNode },
  options?: RenderOptions,
): (props?: Partial<Props>, overrideOptions?: RenderOptions) => RenderResult {
  const renderComponent = (props?: Partial<Props>) => <C {...defaultProps} {...props} />;
  return (props?: Partial<Props>, overrideOptions?: RenderOptions) =>
    customRender(renderComponent(props), {
      ...options,
      ...overrideOptions,
    });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render, customRenderHook as renderHook };
export { userEvent };

/** Reusable polymorphic types have been created based on this article here https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/ **/
import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  PropsWithChildren,
} from "react";

type TAsProp<C extends ElementType> = {
  as?: C;
};

type TPropsToOmit<C extends ElementType, P> = keyof (TAsProp<C> & P);

export type TPolymorphicComponentProp<C extends ElementType, Props = object> = PropsWithChildren<
  Props & TAsProp<C>
> &
  Omit<ComponentPropsWithoutRef<C>, TPropsToOmit<C, Props>>;

export type TPolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>["ref"];

export type TPolymorphicComponentPropWithRef<
  C extends ElementType,
  Props = object,
> = TPolymorphicComponentProp<C, Props> & { ref?: TPolymorphicRef<C> };

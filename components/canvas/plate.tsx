import { type ComponentPropsWithoutRef, type ElementType } from "react";

type PlateProps<T extends ElementType> = {
  as?: T;
  marked?: boolean;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

/**
 * The base "plate" card used throughout the canvas: a bordered card on the
 * warm card surface, optionally decorated with the corner crop-marks from
 * the approved design.
 */
export function Plate<T extends ElementType = "div">({
  as,
  marked = false,
  className = "",
  ...props
}: PlateProps<T>) {
  const Component = as || "div";
  return (
    <Component
      className={`relative border border-line-soft bg-card ${marked ? "plate-marks" : ""} ${className}`}
      {...props}
    />
  );
}

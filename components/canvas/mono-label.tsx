import { type ComponentPropsWithoutRef } from "react";

type MonoLabelProps = ComponentPropsWithoutRef<"span"> & {
  tone?: "mute" | "ink" | "accent";
};

const toneClass: Record<NonNullable<MonoLabelProps["tone"]>, string> = {
  mute: "text-ink-mute",
  ink: "text-ink",
  accent: "text-accent-deep",
};

/** Small uppercase IBM Plex Mono label used for meta text throughout the canvas. */
export function MonoLabel({ tone = "mute", className = "", ...props }: MonoLabelProps) {
  return (
    <span
      className={`font-mono text-[10px] font-medium uppercase leading-none tracking-[.08em] ${toneClass[tone]} ${className}`}
      {...props}
    />
  );
}

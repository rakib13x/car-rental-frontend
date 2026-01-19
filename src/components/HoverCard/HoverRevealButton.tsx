import React, { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";

type Variant = "butter" | "lime" | "invert";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export function HoverRevealButton({
  label,
  variant = "butter",
  icon,
  onClick,
  className = "",
}: {
  label?: string;
  variant?: Variant;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const rootRef = useRef<HTMLButtonElement | null>(null);
  const circleRef = useRef<HTMLSpanElement | null>(null);
  const contentRef = useRef<HTMLSpanElement | null>(null);

  const palette = useMemo(() => {
    // Use CSS vars defined in the design system; variants only swap which vars are used.
    switch (variant) {
      case "lime":
        return { accent: "hsl(var(--brand))", primary: "hsl(var(--ink))" };
      case "invert":
        return { accent: "hsl(var(--ink))", primary: "hsl(var(--butter))" };
      case "butter":
      default:
        return { accent: "hsl(var(--butter))", primary: "hsl(var(--ink))" };
    }
  }, [variant]);

  useEffect(() => {
    const root = rootRef.current;
    const circle = circleRef.current;
    const content = contentRef.current;
    if (!root || !circle || !content) return;

    // Seed CSS vars
    root.style.setProperty("--accent", palette.accent);
    root.style.setProperty("--primary", palette.primary);

    const reduce = prefersReducedMotion();

    const setX: (v: number) => void = reduce
      ? (v) => circle.style.setProperty("--x", `${v}px`)
      : (gsap.quickTo(circle, "--x", {
          duration: 0.28,
          ease: "power3.out",
        }) as unknown as (v: number) => void);

    const setY: (v: number) => void = reduce
      ? (v) => circle.style.setProperty("--y", `${v}px`)
      : (gsap.quickTo(circle, "--y", {
          duration: 0.28,
          ease: "power3.out",
        }) as unknown as (v: number) => void);

    const setPosInstant = (x: number, y: number) => {
      circle.style.setProperty("--x", `${x}px`);
      circle.style.setProperty("--y", `${y}px`);
    };

    const getLocalXY = (e: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const onMove = (e: PointerEvent) => {
      const { x, y } = getLocalXY(e);
      setX(x);
      setY(y);
    };

    const onEnter = (e: PointerEvent) => {
      // Ensure the circle spawns exactly where the pointer enters.
      const { x, y } = getLocalXY(e);
      setPosInstant(x, y);

      if (reduce) {
        circle.style.setProperty("--s", "1");
        content.style.color = "var(--primary)";
      } else {
        gsap.killTweensOf([circle, content]);
        gsap.to(circle, { "--s": 1, duration: 0.36, ease: "power3.out" });
        // Slight delay so the fill is visible before the text flips (prevents "invisible" text)
        gsap.to(content, {
          color: "var(--primary)",
          duration: 0.16,
          ease: "power2.out",
          delay: 0.14,
        });
      }
    };

    const onLeave = () => {
      if (reduce) {
        circle.style.setProperty("--s", "0");
        content.style.color = "var(--accent)";
      } else {
        gsap.killTweensOf([circle, content]);
        gsap.to(circle, { "--s": 0, duration: 0.28, ease: "power2.inOut" });
        gsap.to(content, {
          color: "var(--accent)",
          duration: 0.12,
          ease: "power2.out",
        });
      }
    };

    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerenter", onEnter);
    root.addEventListener("pointerleave", onLeave);

    return () => {
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerenter", onEnter);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, [palette]);

  return (
    <button
      ref={rootRef}
      type="button"
      onClick={onClick}
      className={`relative grid place-items-center w-full px-10 py-4 rounded-full border border-border bg-[var(--primary)] shadow-[var(--shadow-glow)] overflow-hidden cursor-pointer transition-[transform,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/35 hover:-translate-y-px ${className}`}
    >
      <span
        ref={circleRef}
        aria-hidden
        className="absolute z-[1] left-[var(--x)] top-[var(--y)] w-[190%] aspect-square rounded-full bg-[var(--accent)] -translate-x-1/2 -translate-y-1/2 origin-top-left scale-[var(--s)] pointer-events-none will-change-transform"
      />
      <span
        ref={contentRef}
        className="relative z-[2] inline-flex items-center justify-center gap-2 text-[var(--accent)] font-semibold text-[1.35rem] text-center"
      >
        {icon ? (
          <span className="inline-flex items-center justify-center">
            {icon}
          </span>
        ) : null}
        {label ? <span>{label}</span> : null}
      </span>
    </button>
  );
}

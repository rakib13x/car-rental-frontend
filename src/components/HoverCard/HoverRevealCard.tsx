import React, { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";

type Variant = "card" | "brand" | "butter" | "service";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export function HoverRevealCard({
  variant = "card",
  className = "",
  children,
  onClick,
  onPointerEnter,
  onPointerLeave,
}: {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<HTMLSpanElement | null>(null);

  const palette = useMemo(() => {
    switch (variant) {
      case "brand":
        return { accent: "hsl(var(--brand))", primary: "hsl(var(--card))" };
      case "butter":
        return { accent: "hsl(var(--butter))", primary: "hsl(var(--card))" };
      case "service":
        return {
          accent: "hsl(var(--service))",
          primary: "hsl(var(--service-surface))",
        };
      case "card":
      default:
        return { accent: "hsl(var(--accent))", primary: "hsl(var(--card))" };
    }
  }, [variant]);

  useEffect(() => {
    const root = rootRef.current;
    const circle = circleRef.current;
    if (!root || !circle) return;

    root.style.setProperty("--accent", palette.accent);
    root.style.setProperty("--primary", palette.primary);

    const reduce = prefersReducedMotion();

    // Ensure baseline state
    gsap.set(circle, {
      scaleY: 0,
      transformOrigin: "50% 100%",
    });

    const show = () => {
      if (reduce) {
        gsap.set(circle, { scaleY: 1 });
      } else {
        gsap.killTweensOf(circle);
        gsap.to(circle, {
          scaleY: 1,
          duration: 0.38,
          ease: "power3.out",
        });
      }
    };

    const hide = () => {
      if (reduce) {
        gsap.set(circle, { scaleY: 0 });
      } else {
        gsap.killTweensOf(circle);
        gsap.to(circle, { scaleY: 0, duration: 0.28, ease: "power2.inOut" });
      }
    };

    root.addEventListener("pointerenter", show);
    root.addEventListener("pointerleave", hide);

    return () => {
      root.removeEventListener("pointerenter", show);
      root.removeEventListener("pointerleave", hide);
    };
  }, [palette]);

  const clickable = typeof onClick === "function";

  return (
    <div
      ref={rootRef}
      className={`relative overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/35 ${className}`}
      onClick={onClick}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={(e) => {
        if (!clickable) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <span
        ref={circleRef}
        aria-hidden
        className="absolute inset-0 z-[1] origin-bottom scale-y-0 bg-[var(--accent)] pointer-events-none will-change-transform"
      />
      <div className="relative z-[2]">{children}</div>
    </div>
  );
}

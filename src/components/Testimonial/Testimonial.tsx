import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  rating: number;
  image?: string;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

export default function Testimonial() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const testimonials = useMemo<Testimonial[]>(
    () => [
      {
        rating: 5,
        quote:
          "Renting a car from Nova Ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.",
        name: "Floyd Miles",
        title: "Project Manager",
      },
      {
        rating: 5,
        quote:
          "Every detail felt thoughtful — quick pickup, spotless interior, and genuinely friendly support. I'd book again without thinking twice.",
        name: "Annette Black",
        title: "Operations Lead",
      },
      {
        rating: 5,
        quote:
          "Smooth booking, no surprises, and the car drove perfectly. The whole experience was calm and professional from start to finish.",
        name: "Leslie Alexander",
        title: "Product Manager",
      },
      {
        rating: 5,
        quote:
          "The best part was the transparency — what I saw at checkout was exactly what I paid. Great value and even better service.",
        name: "Savannah Nguyen",
        title: "Founder",
      },
      {
        rating: 5,
        quote:
          "Simple, quick, and premium. The car was immaculate and the handoff took minutes. This is how rentals should work.",
        name: "Cameron Williamson",
        title: "Designer",
      },
      {
        rating: 5,
        quote:
          "I loved how effortless everything was. Clear communication, easy returns, and a great selection of vehicles.",
        name: "Jenny Wilson",
        title: "Team Lead",
      },
    ],
    [],
  );

  const baseLen = testimonials.length;
  const slides = useMemo(
    () => [...testimonials, ...testimonials, ...testimonials],
    [testimonials],
  );

  const startPos = baseLen;
  const [pos, setPos] = useState(startPos);
  const posRef = useRef(pos);
  posRef.current = pos;

  const activeIndex = ((pos % baseLen) + baseLen) % baseLen;

  const getXForPos = (p: number) => {
    const track = trackRef.current;
    if (!track) return 0;
    const slideEls = Array.from(
      track.querySelectorAll<HTMLElement>("[data-slide]"),
    );
    const target = slideEls[p];
    if (!target) return 0;
    return -target.offsetLeft;
  };

  const applyActiveStyle = (p: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slideEls = Array.from(
      track.querySelectorAll<HTMLElement>("[data-slide]"),
    );
    slideEls.forEach((el, i) => {
      gsap.to(el, {
        scale: 1,
        opacity: 1,
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: "power3.out",
      });
    });
  };

  const snapBackIfNeeded = (p: number) => {
    if (p >= baseLen * 2) return p - baseLen;
    if (p < baseLen) return p + baseLen;
    return p;
  };

  const animateToPos = (nextPos: number) => {
    const track = trackRef.current;
    if (!track) return;

    gsap.killTweensOf(track);
    const x = getXForPos(nextPos);

    if (prefersReducedMotion) {
      gsap.set(track, { x });
      applyActiveStyle(nextPos);

      const snapped = snapBackIfNeeded(nextPos);
      if (snapped !== nextPos) {
        gsap.set(track, { x: getXForPos(snapped) });
        applyActiveStyle(snapped);
        setPos(snapped);
      }
      return;
    }

    gsap.to(track, {
      x,
      duration: 0.8,
      ease: "power3.out",
      onComplete: () => {
        applyActiveStyle(nextPos);

        const snapped = snapBackIfNeeded(nextPos);
        if (snapped !== nextPos) {
          gsap.set(track, { x: getXForPos(snapped) });
          applyActiveStyle(snapped);
          setPos(snapped);
        }
      },
    });
  };

  useLayoutEffect(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;

    const ctx = gsap.context(() => {
      gsap.set(track, { x: getXForPos(startPos) });
      applyActiveStyle(startPos);

      const ro = new ResizeObserver(() => {
        gsap.set(track, { x: getXForPos(posRef.current) });
      });
      ro.observe(viewport);

      return () => ro.disconnect();
    }, viewport);

    return () => ctx.revert();
  }, [prefersReducedMotion, baseLen]);

  useLayoutEffect(() => {
    animateToPos(pos);
  }, [pos]);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden  py-24">
      {/* Mesh/Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated mesh gradient background */}

        {/* Decorative blur orbs */}
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s" }}
        />

        {/* Additional mesh overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.15) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-1 py-2 rounded-full  mb-6">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              className="text-orange-600"
            >
              <path
                d="M18.562,14.63379,14.00031,12,18.562,9.36621a1.00016,1.00016,0,0,0-1-1.73242L13,10.26776V5a1,1,0,0,0-2,0v5.26776l-4.562-2.634a1.00016,1.00016,0,0,0-1,1.73242L9.99969,12,5.438,14.63379a1.00016,1.00016,0,0,0,1,1.73242L11,13.73224V19a1,1,0,0,0,2,0V13.73224l4.562,2.634a1.00016,1.00016,0,0,0,1-1.73242Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <span className="text-md font-bold text-orange-600">
              Testimonials
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            What our customers are
            <br />
            saying about us
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real experiences from real people who trust Nova Ride for their
            transportation needs
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-12">
          <div
            ref={viewportRef}
            className="relative mx-auto max-w-6xl overflow-hidden"
            aria-roledescription="carousel"
            aria-label="Testimonials"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setPos((v) => v - 1);
              if (e.key === "ArrowRight") setPos((v) => v + 1);
            }}
          >
            <div
              ref={trackRef}
              className="flex gap-8 p-1 will-change-transform "
            >
              {slides.map((t, i) => (
                <div
                  key={`${t.name}-${t.title}-${i}`}
                  data-slide
                  className="w-[min(520px,calc(100vw-2.5rem))] sm:w-[440px] lg:w-[calc((100%-4rem)/3)] shrink-0"
                >
                  <div className="relative h-full bg-white rounded-3xl border-2 shadow-xl shadow-slate-200/50  border-slate-300/50 p-8 hover:shadow-2xl hover:shadow-slate-300/50 transition-shadow duration-300">
                    {/* Quote icon */}
                    <div className="absolute top-6 right-6 w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-orange-600" />
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-6">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star
                          key={s}
                          className="w-5 h-5 fill-orange-600 text-orange-600"
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-slate-700 text-base leading-relaxed mb-8 min-h-[120px]">
                      "{t.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {getInitials(t.name)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-lg">
                          {t.name}
                        </p>
                        <p className="text-sm text-slate-500">{t.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <button
                type="button"
                className="group w-14 h-14 rounded-full bg-orange-600 text-white shadow-lg shadow-slate-200/50 border border-slate-200/50 flex items-center justify-center hover:bg-white hover:text-orange-600 hover:border-1 hover:border-orange-600   transition-all duration-300 hover:shadow-xl hover:shadow-blue-300/50"
                onClick={() => setPos((v) => v - 1)}
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-6 h-6  group-hover:text-orange-600 transition-colors" />
              </button>
              <button
                type="button"
                className="group w-14 h-14 rounded-full bg-orange-600 text-white shadow-lg shadow-slate-200/50 border border-slate-200/50 flex items-center justify-center hover:bg-white hover:text-orange-600 hover:border-1 hover:border-orange-600   transition-all duration-300 hover:shadow-xl hover:shadow-blue-300/50"
                onClick={() => setPos((v) => v + 1)}
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-6 h-6  group-hover:text-orange-600 transition-colors" />
              </button>
            </div>

            {/* Dots */}
            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, i) => {
                const candidates = [i, i + baseLen, i + baseLen * 2];
                const best = candidates.reduce((bestIdx, c) =>
                  Math.abs(c - pos) < Math.abs(bestIdx - pos) ? c : bestIdx,
                );

                return (
                  <button
                    key={i}
                    type="button"
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "w-10 bg-orange-600 shadow-lg shadow-blue-300/50"
                        : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={i === activeIndex ? "true" : "false"}
                    onClick={() => setPos(best)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

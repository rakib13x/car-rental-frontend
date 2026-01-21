import { Play } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Video = () => {
  const playButtonRef = useRef<HTMLButtonElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const logoTrackRef = useRef<HTMLDivElement>(null);

  const brands = [
    { name: "Audi", icon: "◯◯◯◯" },
    { name: "JAGUAR", icon: "🐆" },
    { name: "Volkswagen", icon: "⚙" },
    { name: "ACURA", icon: "Ⓐ" },
    { name: "HONDA", icon: "🦅" },
    { name: "Mercedes-Benz", icon: "★" },
  ];

  useEffect(() => {
    // Play button glow wave effect (only the glow ring animates)
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        scale: 1.5,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        repeat: -1,
        repeatDelay: 0,
      });
    }

    // Logo infinite scroll animation
    if (logoTrackRef.current) {
      const track = logoTrackRef.current;
      // const logos = track.children;
      // const logoCount = logos.length / 2; // We'll duplicate for seamless loop

      gsap.set(track, { x: 0 });

      gsap.to(track, {
        x: `-${50}%`,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

  return (
    <section className=" px-4 lg:px-12 ">
      <div className="max-w-8xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&h=700&fit=crop)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "700px",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[500px] text-center px-4">
            <div className="flex items-center gap-2 mb-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-orange-500"
              >
                <path
                  d="M12 2L15 9H22L16 14L19 21L12 17L5 21L8 14L2 9H9L12 2Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-orange-500 font-semibold">
                Watch Full Video
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 max-w-3xl">
              Discover the ease and convenience of renting with Us
            </h2>

            {/* Play button with wave glow effect */}
            <div className="relative mb-12">
              {/* Animated glow ring */}
              <div
                ref={glowRef}
                className="absolute inset-0 w-20 h-20 rounded-full bg-orange-500/50 blur-md"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              ></div>

              {/* Play button - stays fixed size */}
              <button
                ref={playButtonRef}
                className="relative w-20 h-20 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-300 shadow-2xl"
                onClick={() => console.log("Play video")}
              >
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </button>
            </div>

            {/* Brand logos - infinite scroll */}
            <div className="w-full overflow-hidden mt-8">
              <div
                ref={logoTrackRef}
                className="flex items-center gap-8 lg:gap-12"
                style={{ width: "fit-content" }}
              >
                {/* Original set */}
                {brands.map((brand, index) => (
                  <div
                    key={`original-${index}`}
                    className="text-white font-bold opacity-80 hover:opacity-100 transition-opacity flex-shrink-0"
                  >
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <span className="text-2xl">{brand.icon}</span>
                      <span className="text-xl">{brand.name}</span>
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {brands.map((brand, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="text-white font-bold opacity-80 hover:opacity-100 transition-opacity flex-shrink-0"
                  >
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <span className="text-2xl">{brand.icon}</span>
                      <span className="text-xl">{brand.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;

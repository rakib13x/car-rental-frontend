import { ArrowUpRight } from "lucide-react";
import { HoverRevealCard } from "../HoverCard/HoverRevealCard";

const services = [
  {
    id: 1,
    title: "Car Rental With Driver",
    description: "Enhance your rental experience with additional options.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        className="text-service-ink group-hover:text-service-foreground transition-colors duration-300"
        aria-hidden
      >
        <circle cx="16" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <path
          d="M16 18C12 18 10 20 10 22V26H22V22C22 20 20 18 16 18Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="32" cy="24" r="3" stroke="currentColor" strokeWidth="2" />
        <path
          d="M38 30L32 24L26 30"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 24V36"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Business Car Rental",
    description: "Enhance your rental experience with additional options.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        className="text-service-ink group-hover:text-service-foreground transition-colors duration-300"
        aria-hidden
      >
        <rect
          x="8"
          y="12"
          width="32"
          height="24"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M8 20H40" stroke="currentColor" strokeWidth="2" />
        <circle cx="18" cy="28" r="2" fill="currentColor" />
        <circle cx="30" cy="28" r="2" fill="currentColor" />
        <rect x="14" y="16" width="4" height="2" fill="currentColor" />
        <rect x="30" y="16" width="4" height="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Airport Transfer",
    description: "Enhance your rental experience with additional options.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        className="text-service-ink group-hover:text-service-foreground transition-colors duration-300"
        aria-hidden
      >
        <path
          d="M8 28L16 20L24 24L40 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M38 12L42 12L42 16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <ellipse
          cx="24"
          cy="32"
          rx="16"
          ry="4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M14 32V28C14 26 16 24 18 24H30C32 24 34 26 34 28V32"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Chauffeur Services",
    description: "Enhance your rental experience with additional options.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        className="text-service-ink group-hover:text-service-foreground transition-colors duration-300"
        aria-hidden
      >
        <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="2" />
        <path
          d="M16 36V28C16 25 18 22 24 22C30 22 32 25 32 28V36"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="18"
          y="8"
          width="12"
          height="4"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M18 12H30" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
] as const;

export default function OurService() {
  return (
    <section className="py-28 px-4 lg:px-12 bg-[#ffedd6] text-black rounded-3xl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
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
            <span className="text-orange-600 font-semibold">Our Services</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-service-ink leading-tight">
            Explore our wide range of
            <br />
            rental services
          </h1>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 pt-4">
          {services.map((service) => (
            <HoverRevealCard
              key={service.id}
              variant="service"
              className="bg-gray-50 rounded-2xl p-6 py-10 shadow-sm hover:shadow-xl transition-all duration-300 group"
              onClick={() => {
                console.log("Card clicked:", service.title);
              }}
            >
              <div className="mb-8">
                <div className="w-16 h-16 bg-[#ffedd6] rounded-xl flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-service-ink group-hover:text-white transition-colors duration-300 mb-3">
                {service.title}
              </h3>

              <p className="text-service-muted group-hover:text-white transition-colors duration-300 text-md mb-6 leading-relaxed">
                {service.description}
              </p>

              <button
                type="button"
                className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm transition-all duration-300  bg-orange-500 group-hover:bg-white group-hover:rotate-45 group-hover:duration-500"
                aria-label={`Open ${service.title}`}
                tabIndex={-1}
              >
                <ArrowUpRight
                  className="w-5 h-5 transition-colors duration-300 text-white group-hover:text-orange-500"
                  aria-hidden
                />
              </button>
            </HoverRevealCard>
          ))}
        </div>

        {/* Bottom Description */}
        <div className="text-center space-y-6">
          <p className="text-service-muted max-w-3xl mx-auto leading-relaxed">
            Discover our range of car rental services designed to meet all your
            travel needs. From a diverse fleet of vehicles to flexible rental
            plans.
          </p>

          {/* View All Services Button */}
          <div className="flex items-center justify-center group">
            <button
              type="button"
              className="group flex items-center gap-3 px-8 py-4 bg-orange-500   text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl"
              onClick={() => {
                console.log("View all services");
              }}
            >
              View All Service
            </button>
            <button
              type="button"
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm transition-all duration-300  bg-orange-500 group-hover:bg-white group-hover:rotate-45 group-hover:duration-500"
              tabIndex={-1}
            >
              <ArrowUpRight
                className="w-5 h-5 transition-colors duration-1000 text-white group-hover:text-orange-500"
                aria-hidden
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

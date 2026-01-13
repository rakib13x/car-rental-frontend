import { ArrowUpRight } from "lucide-react";

const OurService = () => {
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
          className="text-gray-800"
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
          className="text-gray-800"
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
          className="text-gray-800"
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
          className="text-gray-800"
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
  ];

  return (
    <section className="py-16 px-4 lg:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
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
            <span className="text-orange-500 font-semibold">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Explore our wide range of
            <br />
            rental services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-300">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              <button className="w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Description */}
        <div className="text-center space-y-6">
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our range of car rental services designed to meet all your
            travel needs. From a diverse fleet of vehicles to flexible rental
            plans.
          </p>

          {/* View All Services Button */}
          <div className="flex items-center justify-center">
            <button className="group flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
              View All Service
              <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                <ArrowUpRight className="w-5 h-5 text-orange-500" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;

import { Zap, Sun } from "lucide-react";

export default function Partner() {
  const brands = [
    {
      id: 1,
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="currentColor"
            strokeWidth="3"
          />
          <circle cx="20" cy="12" r="3" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 2,
      icon: <Sun className="w-10 h-10" />,
    },
    {
      id: 3,
      icon: <Zap className="w-10 h-10" fill="currentColor" />,
    },
    {
      id: 4,
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" fill="currentColor" />
          <path d="M8 16 L20 8 L32 16 L20 24 Z" fill="white" />
          <path d="M8 24 L20 16 L32 24 L20 32 Z" fill="white" />
        </svg>
      ),
    },
    {
      id: 5,
      icon: <Zap className="w-10 h-10" fill="currentColor" />,
    },
    {
      id: 6,
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" fill="currentColor" />
          <path
            d="M10 20 Q20 10, 30 20 Q20 30, 10 20"
            stroke="white"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      ),
    },
    {
      id: 7,
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="currentColor"
            strokeWidth="3"
          />
          <circle cx="20" cy="12" r="3" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 8,
      icon: <Sun className="w-10 h-10" />,
    },
  ];

  return (
    <section className="py-20 px-4 lg:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-orange-600"
            >
              <path
                d="M12 2L15 9H22L16 14L19 21L12 17L5 21L8 14L2 9H9L12 2Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
              Executive Partners
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Trusted by leading brands
          </h2>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="group bg-white rounded-2xl p-8 flex items-center justify-center gap-4 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
            >
              <div className="text-orange-600 group-hover:scale-110 transition-transform duration-300">
                {brand.icon}
              </div>
              <span className="text-2xl font-bold text-gray-900">
                Logoipsum
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Drivers() {
  const drivers = [
    {
      id: 1,
      name: "John Smith",
      role: "Senior Chauffeur",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
    },
    {
      id: 2,
      name: "Taylor Smith",
      role: "City Tour Guide",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    },
    {
      id: 3,
      name: "Jordan Brown",
      role: "Distance Driver",
      image:
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca44?w=400&h=500&fit=crop",
    },
    {
      id: 4,
      name: "Davis Casey",
      role: "Travel Specialist",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    },
  ];

  return (
    <section className="py-20 px-4 lg:px-12 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
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
              Our Experienced Drivers
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            Ensuring your safety and comfort on every journey
          </h2>
        </div>

        {/* Drivers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {drivers.map((driver) => (
            <div
              key={driver.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Driver Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={driver.image}
                  alt={driver.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Driver Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {driver.name}
                </h3>
                <p className="text-gray-600">{driver.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

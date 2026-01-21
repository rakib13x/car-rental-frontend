import { Play, Plus } from "lucide-react";

export default function AboutWatch() {
  const customers = [
    "https://i.pravatar.cc/150?img=12",
    "https://i.pravatar.cc/150?img=13",
    "https://i.pravatar.cc/150?img=14",
    "https://i.pravatar.cc/150?img=15",
  ];

  return (
    <section className="relative py-20 px-4 lg:px-12 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 overflow-hidden">
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
              Watch Our Video
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            Discover what sets us apart in the car rental industry
          </h2>
        </div>

        {/* Video Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Card - Statistics */}
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
              alt="Satisfied customer"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60"></div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-8 lg:p-10">
              <div>
                <h3 className="text-5xl lg:text-6xl font-bold text-white mb-2">
                  3100+
                </h3>
                <p className="text-white/90 text-lg">satisfied customer</p>
              </div>

              {/* Customer Avatars */}
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {customers.map((avatar, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded-full border-3 border-white overflow-hidden ring-2 ring-white"
                    >
                      <img
                        src={avatar}
                        alt={`Customer ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center ring-2 ring-white">
                    <Plus className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Video */}
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px] cursor-pointer">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
              alt="Business professional"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>

            {/* Play Button */}
            <div className="absolute bottom-8 right-8">
              <button
                onClick={() => console.log("Play video")}
                className="w-16 h-16 lg:w-20 lg:h-20 bg-orange-600 hover:bg-orange-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl group-hover:shadow-orange-500/50"
              >
                <Play
                  className="w-8 h-8 lg:w-10 lg:h-10 text-white ml-1"
                  fill="white"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Curved White Section at Bottom Right */}
      <div className="absolute bottom-0 right-0 w-full h-32 lg:h-48 pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 right-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160 Q720,80 1440,160 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

import { Play } from "lucide-react";

const Video = () => {
  return (
    <section className="py-16 px-4 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&h=700&fit=crop)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "500px",
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

            {/* Play button */}
            <button className="w-20 h-20 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl mb-12">
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </button>

            {/* Brand logos */}
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 mt-8">
              <div className="text-white text-2xl font-bold opacity-80 hover:opacity-100 transition-opacity">
                <span className="text-3xl">◯◯◯◯</span>
                <div className="text-sm mt-1">Audi</div>
              </div>
              <div className="text-white text-xl font-bold opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2">
                <span className="text-2xl">🐆</span>
                <span>JAGUAR</span>
              </div>
              <div className="text-white text-xl font-bold opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2">
                <span>Volkswagen</span>
                <span className="text-2xl">⚙</span>
              </div>
              <div className="text-white text-xl font-bold opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2">
                <span className="text-2xl">Ⓐ</span>
                <span>ACURA</span>
              </div>
              <div className="text-white text-xl font-bold opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2">
                <span className="text-2xl">🦅</span>
                <span>HONDA</span>
              </div>
              <div className="text-white text-xl font-bold opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2">
                <span className="text-2xl">★</span>
                <span>Mercedes-Benz</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;

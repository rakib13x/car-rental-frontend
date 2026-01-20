import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative grid lg:grid-cols-2 gap-8 items-center p-8 sm:p-12 lg:p-16">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Ready to hit the road?
                <br />
                Book your car today!
              </h2>

              <p className="text-gray-300 text-lg max-w-md">
                Our friendly customer service team is here to help. Contact us
                anytime for support and inquiries.
              </p>

              <div className="flex items-center gap-3 pt-4">
                <button
                  type="button"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => console.log("Contact Us clicked")}
                >
                  Contact Us
                </button>

                <button
                  type="button"
                  className="w-14 h-14 bg-orange-600 hover:bg-orange-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                  onClick={() => console.log("Arrow clicked")}
                  aria-label="Learn more"
                >
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Right Content - Car Image */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-2xl">
                {/* Glow effect behind car */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full transform scale-75" />

                {/* Car Image */}
                <img
                  src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&h=500&fit=crop"
                  alt="White luxury sedan"
                  className="relative w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

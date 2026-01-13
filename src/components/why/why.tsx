import { ArrowRight } from "lucide-react";
const why = () => {
  return (
    <div>
      <section className="py-16 px-4 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Images (Desktop) / Top (Mobile) */}
            <div className="relative order-1 lg:order-1">
              <div className="relative w-full max-w-lg mx-auto lg:mx-0">
                {/* Top circular image */}
                <div className="absolute top-0 left-0 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white z-10">
                  <img
                    src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&h=500&fit=crop"
                    alt="Woman in car"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom circular image */}
                <div className="absolute bottom-0 right-0 w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1551522435-a13afa10f103?w=500&h=500&fit=crop"
                    alt="Woman with coffee"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 z-20">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 80 80"
                    fill="none"
                    className="text-orange-500 md:w-20 md:h-20"
                  >
                    <path
                      d="M40 0L45 35H75L50 55L60 80L40 65L20 80L30 55L5 35H35L40 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div className="absolute bottom-1/4 left-0 z-20">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 50 50"
                    fill="none"
                    className="text-gray-800 md:w-12 md:h-12"
                  >
                    <path
                      d="M25 5L27 23L45 25L27 27L25 45L23 27L5 25L23 23L25 5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                {/* Spacer for layout */}
                <div className="w-full h-80 sm:h-96 md:h-[28rem]"></div>
              </div>
            </div>

            {/* Right side - Content (Desktop) / Bottom (Mobile) */}
            <div className="space-y-6 order-2 lg:order-2">
              <div className="flex items-center gap-2">
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
                <span className="text-orange-500 font-semibold">About Us</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Your trusted partner in reliable car rental
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Aqestic Optio Amet A Ququam Saepe Aliquid Voluate Dicta Fuga
                Dolor Saerror Sed Earum A Magni Soluta Quam Minus Dolor Dolor
              </p>

              {/* Features */}
              <div className="space-y-6 pt-4">
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        className="text-orange-500 w-7 h-7 sm:w-8 sm:h-8"
                      >
                        <rect
                          x="4"
                          y="8"
                          width="18"
                          height="14"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M8 8V6C8 4.89543 8.89543 4 10 4H14C15.1046 4 16 4.89543 16 6V8"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M22 16H28V20C28 21.1046 27.1046 22 26 22H22V16Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <circle cx="10" cy="16" r="2" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      Easy Booking Process
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      We Have Optimized The Booking Process So That Our Clients
                      Can Experience The Easiest And The Safest Service
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        className="text-orange-500 w-7 h-7 sm:w-8 sm:h-8"
                      >
                        <path
                          d="M4 18C4 18 6 16 10 16C14 16 14 18 18 18C22 18 24 16 24 16V6C24 6 22 8 18 8C14 8 14 6 10 6C6 6 4 8 4 8V18Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 28V18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <circle
                          cx="28"
                          cy="20"
                          r="6"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M28 17V20L30 22"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      Convenient Pick-Up & Return Process
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      We Have Optimized The Booking Process So That Our Clients
                      Can Experience The Easiest And The Safest Service
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <div className="pt-4">
                <button className="group flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  Contact Us
                  <span className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default why;

import { ArrowUpRight } from "lucide-react";
import aboutImg1 from "../../../public/images/about-img-1.jpg";
import aboutImg2 from "../../../public/images/about-img-2.jpg";

const why = () => {
  return (
    <div>
      <section className="py-16 px-4 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Images (Desktop) / Top (Mobile) */}
            <div className="relative order-1 lg:order-1">
              <div className="relative w-full max-w-lg mx-auto lg:mx-0 h-[650px]">
                {/* Top circular image */}

                <img
                  src={aboutImg1}
                  alt="Woman in car"
                  className="w-[400px] h-[550px] object-cover rounded-full"
                />
                {/* Bottom circular image */}
                <img
                  src={aboutImg2}
                  alt="Woman with coffee"
                  className="w-[300px] h-[400px] object-cover rounded-full absolute top-60 left-60"
                />
                {/* Decorative elements */}
                <div className="absolute top-[20%] left-[90%] transform -translate-x-1/2 z-20">
                  <svg
                    width="80px"
                    height="80px"
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
                </div>

                <div className="absolute bottom-[5%] left-[35%] z-20">
                  <svg
                    fill="#000000"
                    width="40px"
                    height="40px"
                    viewBox="0 0 2.4 2.4"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m1.956 2.341 -0.666 -0.329a0.126 0.126 0 0 0 -0.12 0.004l0.001 0 -0.642 0.375a0.061 0.061 0 0 1 -0.09 -0.063v0l0.099 -0.754q0.001 -0.007 0.001 -0.016c0 -0.036 -0.015 -0.069 -0.04 -0.092l0 0 -0.457 -0.425a0.127 0.127 0 0 1 0.065 -0.217l0.001 0 0.599 -0.111c0.042 -0.008 0.077 -0.035 0.094 -0.073l0 -0.001L1.048 0.075a0.127 0.127 0 0 1 0.227 -0.009l0 0.001 0.288 0.547c0.02 0.036 0.056 0.062 0.098 0.067h0.001l0.605 0.068a0.127 0.127 0 0 1 0.081 0.212l0 0 -0.427 0.456a0.125 0.125 0 0 0 -0.032 0.112l0 -0.001 0.152 0.745q0.001 0.006 0.002 0.013a0.061 0.061 0 0 1 -0.088 0.055z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right side - Content (Desktop) / Bottom (Mobile) */}
            <div className="space-y-6 order-2 lg:order-2 lg:mb-8">
              <div className="flex items-center gap-2">
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
                <span className="text-orange-500 font-semibold">About Us</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
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
                <div className="flex  group">
                  <button
                    type="button"
                    className="group flex items-center gap-3 px-8 py-4 bg-orange-500   text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl"
                    onClick={() => {
                      console.log("View all services");
                    }}
                  >
                    Contact Us
                  </button>
                  <button
                    type="button"
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm transition-all duration-300  bg-orange-500 group-hover:bg-white group-hover:rotate-45 group-hover:duration-500 group-hover:border group-hover:border-orange-500"
                    tabIndex={-1}
                  >
                    <ArrowUpRight
                      className="w-5 h-5 transition-colors duration-1000 text-white group-hover:text-orange-500 "
                      aria-hidden
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default why;

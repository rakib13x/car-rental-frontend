import { ChevronDown } from "lucide-react";
import { useState } from "react";

const HowItWorksSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const steps = [
    {
      id: 1,
      title: "Browse And Select",
      content:
        "Explore our diverse fleet of vehicles and choose the perfect car for your journey. Filter by type, size, or features to find exactly what you need.",
    },
    {
      id: 2,
      title: "Book And Confirm",
      content:
        "Select your pickup and drop-off dates, add any extras, and complete your booking in just a few clicks. Receive instant confirmation via email.",
    },
    {
      id: 3,
      title: "Book And Enjoy",
      content:
        "Pick up your car at the designated location and hit the road. Enjoy a seamless driving experience with our well-maintained vehicles.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-4">
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
                  How It Work
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Streamlined processes for a hassle-free experience
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our streamlined process ensures a seamless car rental experience
                from start to finish. With easy online booking, flexible pick-up
                and drop-off options.
              </p>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={step.id} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-gray-900">
                        {step.id}.
                      </span>
                      <span className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                        {step.title}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-gray-900 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-40 mt-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed pl-12">
                      {step.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image with badge */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto">
              {/* Main circular image */}
              <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=600&fit=crop"
                  alt="Happy customer in car"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative star - top right */}
              <div className="absolute -top-4 -right-4 lg:-right-8 z-20">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  className="text-orange-500"
                >
                  <path
                    d="M40 0L45 35H75L50 55L60 80L40 65L20 80L30 55L5 35H35L40 0Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Decorative sparkle - bottom left */}
              <div className="absolute -bottom-8 left-8 z-20">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  className="text-gray-800"
                >
                  <path
                    d="M25 5L27 23L45 25L27 27L25 45L23 27L5 25L23 23L25 5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Stats Badge */}
              <div className="absolute -bottom-8 -right-4 lg:-right-8 z-20 bg-orange-500 rounded-2xl p-6 shadow-2xl">
                <div className="text-white mb-3">
                  <div className="text-2xl font-bold">5 m+</div>
                  <div className="text-sm">Trusted world</div>
                  <div className="text-sm">wide global</div>
                  <div className="text-sm">clients</div>
                </div>
                <div className="w-full h-px bg-white/30 my-3"></div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                      <img
                        src="https://i.pravatar.cc/150?img=1"
                        alt="Client 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                      <img
                        src="https://i.pravatar.cc/150?img=5"
                        alt="Client 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                      <img
                        src="https://i.pravatar.cc/150?img=9"
                        alt="Client 3"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <span className="text-orange-500 font-bold text-sm">+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

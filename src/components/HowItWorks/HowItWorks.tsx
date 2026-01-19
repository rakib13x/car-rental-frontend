import { ChevronDown } from "lucide-react";
import { useState } from "react";
import aboutImg1 from "../../../public/images/about-img-1.jpg";

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

  const toggleAccordion = (index: any) => {
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
                <span className="text-orange-600 font-semibold">
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
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.id} className="border-b border-gray-200 pb-6">
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

              <img
                src={aboutImg1}
                alt="Happy customer in car"
                className="w-[80%] h-[600px] object-cover rounded-full"
              />

              {/* Decorative star - top right */}
              <div className="absolute top-12 -right-4 lg:right-8 z-20">
                <svg
                  width="90px"
                  height="90px"
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

              {/* Decorative sparkle - bottom left */}
              <div className="absolute -bottom-8 left-8 z-20">
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

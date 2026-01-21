import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function Vision() {
  const [activeTab, setActiveTab] = useState("vision");

  const tabs = [
    { id: "vision", label: "Our Vision" },
    { id: "mission", label: "Our Mission" },
    { id: "approach", label: "Our Approach" },
  ];

  const content = {
    vision: {
      label: "Our Vision",
      title: "Pioneering excellence in car rental services",
      description:
        "We aim to continually innovate and integrate the latest technology into our services. From easy online bookings to advanced vehicle tracking systems, our goal is to make the car rental process seamless and efficient for our customers. Quality is at the heart of everything we do. We maintain a diverse fleet of well-maintained vehicles that meet the highest standards of safety and comfort.",
      points: [
        "Our customers are our top priority",
        "Quality is at the heart of everything we do",
        "every vehicle leaves care looking its absolute best",
      ],
      image:
        "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop",
    },
    mission: {
      label: "Our Mission",
      title: "Delivering exceptional customer experiences",
      description:
        "Our mission is to provide reliable, affordable, and convenient car rental solutions that exceed customer expectations. We strive to build long-lasting relationships through transparency, integrity, and outstanding service. Every interaction matters, and we're committed to making your journey memorable from start to finish.",
      points: [
        "Transparent pricing with no hidden fees",
        "24/7 customer support for peace of mind",
        "Flexible rental options tailored to your needs",
      ],
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
    },
    approach: {
      label: "Our Approach",
      title: "Innovation meets personalized service",
      description:
        "We combine cutting-edge technology with a human touch to create a rental experience like no other. Our approach focuses on understanding your unique needs and providing customized solutions that fit your lifestyle. From contactless pickup to AI-powered recommendations, we're redefining what car rental should be.",
      points: [
        "Smart booking system for instant reservations",
        "Eco-friendly vehicle options for sustainability",
        "Personalized service from our expert team",
      ],
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
    },
  };

  const activeContent = content[activeTab as keyof typeof content];

  return (
    <section className="py-20 px-4 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
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
              Vision Mission
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Driving excellence and innovation
            <br />
            in car rental services
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
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
                {activeContent.label}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {activeContent.title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg">
              {activeContent.description}
            </p>

            {/* Checkmarks */}
            <div className="space-y-4 pt-4">
              {activeContent.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-900 font-medium text-lg">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={activeContent.image}
                alt={activeContent.title}
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

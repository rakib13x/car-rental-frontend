import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "What Do I Need To Rent A Car?",
      answer:
        "Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs",
    },
    {
      id: 2,
      question: "How Old Do I Need To Be To Rent A Car?",
      answer:
        "The minimum age requirement to rent a car is typically 21 years old. However, drivers under 25 may be subject to additional fees or restrictions depending on the location and vehicle type.",
    },
    {
      id: 3,
      question: "Can I Rent A Car With A Debit Card?",
      answer:
        "Yes, we accept debit cards for car rentals. However, additional verification and a security deposit may be required. Please check with your specific location for their debit card policy.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 lg:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-gray-100 rounded-3xl overflow-hidden p-8">
              <img
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=700&h=700&fit=crop"
                alt="Luxury black car"
                className="w-full h-auto object-contain"
              />
              {/* Background building images */}
              <div className="absolute top-8 left-8 w-32 h-48 opacity-50">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=300&fit=crop"
                  alt="Building"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute top-8 right-8 w-32 h-48 opacity-50">
                <img
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=300&fit=crop"
                  alt="Building"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right side - FAQ Content */}
          <div className="order-1 lg:order-2">
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
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
              Everything you need to know about our services
            </h2>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={faq.id} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <span className="text-lg font-bold text-gray-900 group-hover:text-orange-500 transition-colors pr-4">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-gray-900 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-900 flex-shrink-0" />
                    )}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-40 mt-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

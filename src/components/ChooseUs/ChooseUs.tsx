import building from "../../../public/images/why-choose-img.jpg";
import car from "../../../public/images/why-choose-car-img.png";
const ChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="text-orange-500"
        >
          <rect
            x="8"
            y="12"
            width="24"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 16H28M12 20H20M12 24H24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Extensive Fleet Options",
      description:
        "Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa",
    },
    {
      id: 2,
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="text-orange-500"
        >
          <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 32V26C12 23 14 20 20 20C26 20 28 23 28 26V32"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Exceptional Customer Service",
      description:
        "Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa",
    },
    {
      id: 3,
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="text-orange-500"
        >
          <path
            d="M20 8L24 16L32 20L24 24L20 32L16 24L8 20L16 16L20 8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Convenient Locations",
      description:
        "Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa",
    },
    {
      id: 4,
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="text-orange-500"
        >
          <path
            d="M8 20H16M24 20H32M20 8V16M20 24V32"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "Reliability And Safety",
      description:
        "Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa",
    },
  ];

  return (
    <section className="py-16 px-4 lg:px-12 bg-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-0 w-4 h-4 bg-gray-200 rounded-full"></div>
      <div className="absolute top-40 left-4 w-3 h-3 bg-gray-300 rounded-full"></div>
      <div className="absolute top-60 left-2 w-2 h-2 bg-orange-500 rounded-full"></div>
      <div className="absolute bottom-20 right-0 w-4 h-4 bg-orange-500 rounded-full"></div>
      <div className="absolute bottom-40 right-4 w-3 h-3 bg-gray-300 rounded-full"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
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
            <span className="text-orange-500 font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Unmatched quality and service
            <br />
            for your needs
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Features */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center">
                {features[0].icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {features[0].title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {features[0].description}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center">
                {features[1].icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {features[1].title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {features[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="relative">
            <img
              src={building}
              alt="Luxury red car with city background"
              className="w-[80%] h-[90%] object-cover rounded-full"
            />
            <img
              src={car}
              alt="Luxury red car with city background"
              className="w-[100%] h-[50%] object-cover absolute top-[50%] right-[10%]"
            />
          </div>

          {/* Right Features */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center">
                {features[2].icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {features[2].title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {features[2].description}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center">
                {features[3].icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {features[3].title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {features[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ChooseUs;

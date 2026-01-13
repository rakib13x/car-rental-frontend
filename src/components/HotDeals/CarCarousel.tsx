import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./CarCarousel.css";
import { useGetAllCarsQuery } from "../../redux/features/cars/carApi";

export default function CarCarousel() {
  const { data, isLoading, isError } = useGetAllCarsQuery({
    limit: 1000,
  });

  if (isLoading) {
    return <div>Loading cars...</div>;
  }

  if (isError) {
    return <div>Error loading cars</div>;
  }

  const cars = data?.data || [];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="header py-8 max-w-7xl mx-auto">
      <Slider className="car-carousel -mx-3" {...settings}>
        {cars.map((car) => (
          <div className="px-3" key={car._id}>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-56 md:h-48 lg:h-56 bg-gray-100">
                <img
                  className="object-cover w-full h-full"
                  src={car.image || "/public/placeholder-car.jpg"}
                  alt={car.name}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                <div className="absolute top-3 left-3 rounded-full py-1 px-3 uppercase text-xs text-white bg-orange-600">
                  Special Offer
                </div>

                <div className="absolute bottom-3 right-3 bg-white/90 rounded-full px-3 py-1 text-sm font-semibold">
                  ${car.pricePerHour}
                </div>
              </div>

              <div className="p-4">
                <Link to={`/car-single/${car._id}`}>
                  <h3 className="text-lg font-semibold text-slate-800">{car.name}</h3>
                </Link>
                <p className="text-sm text-slate-500 mt-1">{car.model || "Model info"} • {car.seats || "—"} seats</p>
                <p className="text-sm text-slate-500 mt-2 line-clamp-3">{car.description || "Comfortable, fuel-efficient and reliable choice for city and highway drives."}</p>

                <div className="mt-4 flex items-center gap-3">
                  <Link
                    to={`/car-single/${car._id}`}
                    className="inline-flex items-center px-3 py-2 rounded-md bg-orange-500 text-white text-sm font-medium"
                  >
                    View
                  </Link>

                  <div className="ml-auto text-lg font-bold text-slate-800">${car.pricePerHour}/hr</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

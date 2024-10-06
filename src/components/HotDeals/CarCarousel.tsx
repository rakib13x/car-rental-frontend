import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useGetAllCarsQuery } from "../../redux/features/cars/carApi";

export default function CarCarousel() {
  const { data, isLoading, isError, error } = useGetAllCarsQuery({
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
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
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
    <div className="header py-4 max-w-7xl mx-auto">
      <Slider className="car-carousel -mx-2" {...settings}>
        {cars.map((car) => (
          <div className="mb-1 max-w-lg px-2" key={car._id}>
            <div>
              <div className="relative aspect-[16/9] bg-gray-200">
                <img
                  className="object-cover w-full h-full"
                  src={car.image}
                  alt={car.name}
                />
                <Link to={`/car-single/${car._id}`}>
                  <div className="absolute top-3 left-3 rounded-full py-1 px-4 uppercase text-xs text-white bg-orange-600">
                    {"Special Offer"}
                  </div>
                </Link>
              </div>
              <div className="mt-6 flex gap-3">
                <Link to={`/car-single/${car._id}`}>
                  <h3 className="text-sm">{car.name}</h3>
                </Link>
                <div className="flex-grow"></div>
                <p className="text-xl">${car.pricePerHour}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

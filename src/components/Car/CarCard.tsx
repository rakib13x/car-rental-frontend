import { GiGearStickPattern } from "react-icons/gi";
import { LuFuel, LuStar } from "react-icons/lu";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGetAllCarsQuery } from "../../redux/features/cars/carApi";

interface Props {
  count?: number;
  offset?: number;
}

const getStarIcons = (rate: number) => {
  let content = [];
  for (let i = 0; i < rate; i++) {
    content.push(<LuStar className="text-orange-300" key={`star-${i}`} />);
  }
  for (let i = 0; i < 5 - rate; i++) {
    content.push(<LuStar className="text-gray-300" key={`gray-star-${i}`} />);
  }
  return content;
};

export default function CarCard(props: Props) {
  const { count = 3, offset = 0 } = props;

  const { data: carData, isLoading, error } = useGetAllCarsQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading cars data</div>;
  }

  if (!carData || !carData.data || carData.data.length === 0) {
    return <div>No cars available</div>;
  }

  const cars = carData.data;

  return (
    <>
      {cars.slice(offset, offset + count).map((car: any, index: number) => (
        <div
          className="filter bg-white drop-shadow-md transition ease-linear hover:drop-shadow-xl"
          key={index}
        >
          <div className="relative">
            <Link to={car._id}>
              <div className="relative aspect-[16/9] bg-gray-200">
                <img
                  className="object-cover"
                  src={car.image}
                  //   fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  alt={car.name}
                />
                <p className="px-4 py-2 text-sm font-bold text-white bg-cyan-500 absolute right-0 bottom-0">
                  {car.price}
                </p>
              </div>
            </Link>
            <div className="flex items-center p-6 gap-3">
              <h3 className="text-xl font-semibold">
                <Link to={car.link} className="hover:no-underline">
                  {car.name}
                </Link>
              </h3>
              <div className="flex-grow"></div>
              <div className="flex gap-05">{getStarIcons(car.rate)}</div>
            </div>
          </div>
          <hr className="border-gray-300" />
          <div className="grid gap-3 p-6">
            <div className="flex">
              <div className="flex gap-2 w-[140px] items-center">
                <LuFuel />
                <span>Fuel Type</span>
              </div>
              <div className="mr-3">:</div>
              <div>{car.fuel}</div>
            </div>
            <div className="flex">
              <div className="flex gap-2 w-[140px] items-center">
                <MdAirlineSeatReclineExtra />
                <span>Seats</span>
              </div>
              <div className="mr-3">:</div>
              <div>{car.seats}</div>
            </div>
            <div className="flex">
              <div className="flex gap-2 w-[140px] items-center">
                <GiGearStickPattern />
                <span>Transmission</span>
              </div>
              <div className="mr-3">:</div>
              <div>{car.transmission}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

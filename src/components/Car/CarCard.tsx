// src/components/Car/CarCard.tsx

import { GiGearStickPattern } from "react-icons/gi";
import { LuFuel, LuStar } from "react-icons/lu";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { Link } from "react-router-dom";
import { Car } from "../../types/global";

interface CarProps {
  car?: Car;
}

const getStarIcons = (rate: number = 0) => {
  const content = [];
  for (let i = 0; i < rate; i++) {
    content.push(<LuStar className="text-orange-300" key={`star-${i}`} />);
  }
  for (let i = 0; i < 5 - rate; i++) {
    content.push(<LuStar className="text-gray-300" key={`gray-star-${i}`} />);
  }
  return content;
};

export default function CarCard({ car }: CarProps) {
  if (!car) {
    return (
      <div className="filter bg-white drop-shadow-md transition ease-linear hover:drop-shadow-xl p-6">
        <p className="text-center text-red-500">Car data is not available.</p>
      </div>
    );
  }

  return (
    <div className="filter bg-white drop-shadow-md transition ease-linear hover:drop-shadow-xl">
      <div className="relative">
        <Link to={`/cars/${car._id}`}>
          <div className="relative aspect-[16/9] bg-gray-200">
            <img
              className="object-cover w-full h-full"
              src={car.image || "/placeholder-image.png"}
              sizes="(max-width: 768px) 100vw, 480px"
              alt={car.name || "Unnamed Car"}
            />
            <p className="px-4 py-2 text-sm font-bold text-white bg-cyan-500 absolute right-0 bottom-0">
              {`$${car.pricePerHour}/hr`}
            </p>
          </div>
        </Link>
        <div className="flex items-center p-6 gap-3">
          <h3 className="text-xl font-semibold">
            <Link to={`/cars/${car._id}`} className="hover:no-underline">
              {car.name || "Unnamed Car"}
            </Link>
          </h3>
          <div className="flex-grow"></div>
          <div className="flex gap-0.5">{getStarIcons(car.rate)}</div>
        </div>
      </div>
      <hr className="border-gray-300" />
      <div className="grid gap-3 p-6">
        <div className="flex">
          <div className="flex gap-2 w-[140px] items-center">
            <LuFuel />
            <span>Status</span>
          </div>
          <div className="mr-3">:</div>
          <div>{car.status || "N/A"}</div>
        </div>
        <div className="flex">
          <div className="flex gap-2 w-[140px] items-center">
            <MdAirlineSeatReclineExtra />
            <span>Seats</span>
          </div>
          <div className="mr-3">:</div>
          <div>{car.seats !== undefined ? car.seats : "N/A"}</div>
        </div>
        <div className="flex">
          <div className="flex gap-2 w-[140px] items-center">
            <GiGearStickPattern />
            <span>Transmission</span>
          </div>
          <div className="mr-3">:</div>
          <div>{car.transmission || "N/A"}</div>
        </div>
      </div>
    </div>
  );
}

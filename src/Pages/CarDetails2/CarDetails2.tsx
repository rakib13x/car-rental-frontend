import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { useGetCarByIdQuery } from "../../redux/features/cars/carApi";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const CarDetails2 = () => {
  const { carId } = useParams();
  const navigate = useNavigate();

  const getStarIcons = (rate: number = 0) => {
    const content = [];
    for (let i = 0; i < rate; i++) {
      content.push(<FaStar className="text-orange-300" key={`star-${i}`} />);
    }
    for (let i = 0; i < 5 - rate; i++) {
      content.push(
        <FaStar className="text-orange-300" key={`gray-star-${i}`} />
      );
    }
    return content;
  };

  const {
    data: car,
    isLoading: carLoading,
    error: carError,
  } = useGetCarByIdQuery(carId as string);

  const [selectedFeatures, setSelectedFeatures] = useState({
    insurance: false,
    gps: false,
    childSeat: false,
  });

  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");

  const handleFeatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSelectedFeatures((prevFeatures) => ({
      ...prevFeatures,
      [name]: checked,
    }));
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleStartTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStartTime(event.target.value);
  };

  const handleBook = () => {
    const bookingData = {
      carId,
      carName: car?.name || "Car Name",
      carImage:
        car?.image ||
        "https://tuk-cdn.s3.amazonaws.com/can-uploader/00000800.png",
      price: car?.pricePerHour || 95.56,
      date,
      startTime,
      additionalFeatures: selectedFeatures,
    };
    navigate("/checkout", { state: bookingData });
  };

  // Magnifier settings
  const magnifierHeight = 150;
  const magnifierWidth = 150;
  const zoomLevel = 2;
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[x, y], setXY] = useState([0, 0]);

  if (carLoading) return <div>Loading...</div>;
  if (carError) return <div>Error loading car details.</div>;

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="py-0 px-3">
          <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-white px-4 py-12">
            <div className="lg:flex justify-center gap-8">
              <div className="mt-9">
                {/* Magnifier Image Section */}
                <div className="relative lg:max-w-[624px] h-[600px] border border-gray-300">
                  <img
                    src={
                      car?.image ||
                      "https://tuk-cdn.s3.amazonaws.com/can-uploader/00000800.png"
                    }
                    alt={car?.name || "Car Image"}
                    className="w-full h-full object-cover"
                    onMouseEnter={(e) => {
                      const elem = e.currentTarget;
                      const { width, height } = elem.getBoundingClientRect();
                      setImgWidth(width);
                      setImgHeight(height);
                      setShowMagnifier(true);
                    }}
                    onMouseMove={(e) => {
                      const elem = e.currentTarget;
                      const { top, left } = elem.getBoundingClientRect();
                      const x = e.pageX - left - window.pageXOffset;
                      const y = e.pageY - top - window.pageYOffset;
                      setXY([x, y]);
                    }}
                    onMouseLeave={() => {
                      setShowMagnifier(false);
                    }}
                  />

                  {/* Magnifier */}
                  {showMagnifier && (
                    <div
                      className="absolute pointer-events-none border border-gray-200 bg-white rounded-full"
                      style={{
                        height: `${magnifierHeight}px`,
                        width: `${magnifierWidth}px`,
                        top: `${y - magnifierHeight / 2}px`,
                        left: `${x - magnifierWidth / 2}px`,
                        backgroundImage: `url(${
                          car?.image ||
                          "https://tuk-cdn.s3.amazonaws.com/can-uploader/00000800.png"
                        })`,
                        backgroundSize: `${imgWidth * zoomLevel}px ${
                          imgHeight * zoomLevel
                        }px`,
                        backgroundPositionX: `${
                          -x * zoomLevel + magnifierWidth / 2
                        }px`,
                        backgroundPositionY: `${
                          -y * zoomLevel + magnifierHeight / 2
                        }px`,
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="lg:py-5 md:py-6 py-4 lg:px-14 md:px-6 px-4 bg-gray-100 lg:mt-0 md:mt-8 mt-6">
                <p className="text-2xl font-semibold leading-normal text-gray-800">
                  {car?.name || "Car Name"}
                </p>
                <p className="text-2xl font-semibold leading-normal text-gray-800">
                  <div className="flex gap-0.5">{getStarIcons(car?.rate)}</div>
                </p>
                <p className="text-base leading-normal text-gray-600 lg:max-w-[512px] w-full mt-2">
                  {car?.description || "Car description goes here."}
                </p>
                <p className="text-2xl font-semibold leading-normal text-gray-800 mt-2">
                  ${car?.pricePerHour || "95.56"} per hour
                </p>
                <div className="mt-2">
                  <p className="text-base font-medium text-gray-800">
                    Booking Date
                  </p>
                  <div className="lg:max-w-[512px] w-full mt-2">
                    <input
                      type="date"
                      value={date}
                      onChange={handleDateChange}
                      placeholder="Enter date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                  </div>
                </div>
                <div className="w-full gap-4 pt-2">
                  <div>
                    <p className="text-base text-gray-800 mt-2 font-medium">
                      Start Time
                    </p>
                  </div>
                  <div className="lg:max-w-[512px] w-full mt-2">
                    <input
                      type="text"
                      value={startTime}
                      onChange={handleStartTimeChange}
                      placeholder="Start Time (HH:MM)"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-base font-medium text-gray-800">
                    Select Additional Features
                  </p>
                  <div className="mt-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="insurance"
                        name="insurance"
                        checked={selectedFeatures.insurance}
                        onChange={handleFeatureChange}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="insurance"
                        className="ml-2 block text-sm text-gray-800"
                      >
                        Insurance (+$15)
                      </label>
                    </div>
                    <div className="flex items-center mt-2">
                      <input
                        type="checkbox"
                        id="gps"
                        name="gps"
                        checked={selectedFeatures.gps}
                        onChange={handleFeatureChange}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="gps"
                        className="ml-2 block text-sm text-gray-800"
                      >
                        GPS (+$5)
                      </label>
                    </div>
                    <div className="flex items-center mt-2">
                      <input
                        type="checkbox"
                        id="childSeat"
                        name="childSeat"
                        checked={selectedFeatures.childSeat}
                        onChange={handleFeatureChange}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="childSeat"
                        className="ml-2 block text-sm text-gray-800"
                      >
                        Child Seat (+$7)
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleBook}
                  className="lg:max-w-[512px] w-full bg-orange-500 transition duration-300 hover:bg-orange-300 text-white mt-6 py-2"
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CarDetails2;

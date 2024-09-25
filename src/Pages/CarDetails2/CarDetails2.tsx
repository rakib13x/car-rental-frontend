import { useState } from "react";

const CarDetails2 = () => {
  const [selectedFeatures, setSelectedFeatures] = useState({
    insurance: false,
    gps: false,
    childSeat: false,
  });

  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");

  const handleFeatureChange = (event) => {
    const { name, checked } = event.target;
    setSelectedFeatures((prevFeatures) => ({
      ...prevFeatures,
      [name]: checked,
    }));
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleStartTimeChange = (event) => {
    setStartTime(Number(event.target.value));
  };

  return (
    <div>
      <div className="bg-gray-100">
        <div className="py-14 px-3">
          <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-white px-4 py-12">
            <div className="lg:flex justify-center gap-8">
              <div className="mt-9">
                <div className="lg:max-w-[624px] w-full border border-gray-300">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/00000800.png"
                    alt=""
                    className="mx-auto py-9"
                  />
                </div>
                <div className="flex md:gap-8 gap-4">
                  <div className="lg:max-w-[187px] w-full border border-gray-300 px-4 mt-8">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/k3tt1e.png"
                      alt=""
                      className="mx-auto py-6"
                    />
                  </div>
                  <div className="lg:max-w-[187px] w-full border border-gray-300 px-4 mt-8">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/k3tt1e.png"
                      alt=""
                      className="mx-auto py-6"
                    />
                  </div>
                  <div className="lg:max-w-[187px] w-full border border-gray-300 px-4 mt-8">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/k3tt1e.png"
                      alt=""
                      className="mx-auto py-6"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:py-5 md:py-6 py-4 lg:px-14 md:px-6 px-4 bg-gray-100 lg:mt-0 md:mt-8 mt-6">
                <p className="text-2xl font-semibold leading-normal text-gray-800">
                  Automatic Electric Kettle
                </p>
                <p className="text-base leading-normal text-gray-600 lg:max-w-[512px] w-full mt-2">
                  It comes in a sleek stainless steel finish that is highly
                  durable and safe for boiling water. The energy-efficient
                  kettle features a unique design that allows for easy pouring.
                </p>
                <p className="text-2xl font-semibold leading-normal text-gray-800 mt-2">
                  $95.56
                </p>
                <div className="mt-2">
                  <p className="text-base font-medium text-gray-800">
                    Booking date
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
                      min={0}
                      max={23}
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
                <button className="lg:max-w-[512px] w-full bg-gray-800 transition duration-300 hover:bg-gray-700 text-white mt-6 py-2">
                  Book
                </button>
              </div>
            </div>
            <div className="lg:flex justify-between gap-4 mt-8 lg:px-20 md:px-6 px-4">
              <div className="flex items-center gap-2">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z"
                    stroke="#6B7280"
                    strokeMiterlimit={10}
                  />
                  <path
                    d="M17.2499 9L12.006 15L9.7583 12.75"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.99766 15L6.75 12.75"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.33 9L11.9136 11.7656"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-base text-gray-600 xl:mt-0">
                  Change of mind applicable
                </p>
              </div>
              <div className="flex items-center  gap-2 lg:mt-0 md:mt-6 mt-4">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z"
                    stroke="#6B7280"
                    strokeMiterlimit={10}
                  />
                  <path
                    d="M17.2499 9L12.006 15L9.7583 12.75"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.99766 15L6.75 12.75"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.33 9L11.9136 11.7656"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-base text-gray-600">
                  Enjoy free shipping promotion
                </p>
              </div>
              <div className="flex items-center gap-2 lg:mt-0 md:mt-6 mt-4">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z"
                    stroke="#6B7280"
                    strokeMiterlimit={10}
                  />
                  <path
                    d="M17.2499 9L12.006 15L9.7583 12.75"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.99766 15L6.75 12.75"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.33 9L11.9136 11.7656"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-base text-gray-600 xl:mt-0">
                  Warranty available on all items
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails2;

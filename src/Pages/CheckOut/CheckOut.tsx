import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const bookingData = location.state || {};
  const { carName, carImage, price, additionalFeatures, date, startTime } =
    bookingData;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    region: "",
    zipCode: "",
    country: "",
    phone: "",
    nidNumber: "",
    license: "",
  });

  const navigate = useNavigate();

  const calculateAdditionalFeatures = () => {
    let featureCost = 0;
    if (additionalFeatures?.insurance) featureCost += 15;
    if (additionalFeatures?.gps) featureCost += 5;
    if (additionalFeatures?.childSeat) featureCost += 7;
    return featureCost;
  };

  const calculateTotalPrice = () => {
    return (price || 0) + calculateAdditionalFeatures();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleConfirm = () => {
    const combinedData = {
      ...bookingData,
      ...formData,
    };
    navigate("/confirm", { state: combinedData });
  };

  return (
    <div className="container mx-auto">
      <div className="w-full mx-auto">
        <div className="w-full py-12 md:py-8 px-4 sm:px-0 md:px-6">
          <p className="lg:text-4xl md:text-2xl text-2xl font-semibold leading-9 text-gray-800 sm:mb-8 mb-8 md:mb-8">
            Check out
          </p>
          <p className="lg:text-xl md:text-xl text-lg font-medium leading-tight text-gray-800 mb-6">
            Contact Information
          </p>
          <input
            type="email"
            name="email"
            className="pb-4 rounded border-b border-gray-200 w-full placeholder-gray-600 focus:outline-0"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-span-5"></div>
      </div>

      {/* Booking Details */}
      <div className="w-full">
        <div className="w-full px-4 sm:px-0 md:px-6">
          <p className="text-xl font-semibold leading-tight text-gray-800">
            Booking Details
          </p>

          {/* Input fields for user's details */}
          <div className="flex sm:flex-row md:flex-col flex-col lg:flex-row">
            <input
              type="text"
              name="firstName"
              className="pb-4 rounded border-b border-gray-200 block w-full placeholder-gray-600 mt-6 focus:outline-0"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              className="pb-4 rounded border-b border-gray-200 block w-full placeholder-gray-600 mt-6 sm:ml-8 md:ml-0 lg:ml-8 focus:outline-0"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <input
            type="text"
            name="address"
            className="pb-4 rounded border-b border-gray-200 block w-full placeholder-gray-600 mt-6 focus:outline-0"
            placeholder="User Address"
            value={formData.address}
            onChange={handleInputChange}
          />

          <div className="flex md:flex-row flex-col relative">
            <div className="mx-auto mt-6 w-full">
              <input
                type="text"
                name="city"
                className="pb-4 rounded border-b border-gray-200 block w-full placeholder-gray-600 focus:outline-0"
                placeholder="Town/City"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="mx-auto mt-6 w-full md:ml-8">
              <input
                type="text"
                name="region"
                className="pb-4 rounded border-b border-gray-200 block w-full placeholder-gray-600 focus:outline-0"
                placeholder="Region (optional)"
                value={formData.region}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col">
            <div className="mx-auto mt-6 w-full">
              <input
                type="text"
                name="zipCode"
                className="pb-4 rounded border-b border-gray-200 block w-full placeholder-gray-600 focus:outline-0"
                placeholder="Zip Code"
                value={formData.zipCode}
                onChange={handleInputChange}
              />
            </div>
            <div className="mx-auto mt-6 w-full md:ml-8">
              <input
                type="text"
                name="country"
                className="pb-4 rounded border-b border-gray-200 block w-full placeholder-gray-600 focus:outline-0"
                placeholder="Country"
                value={formData.country}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <input
            type="tel"
            name="phone"
            className="pb-4 rounded border-b border-gray-200 block w-full placeholder-gray-600 mt-6 focus:outline-0"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="nidNumber"
            className="pb-4 rounded border-b border-gray-200 block w-full placeholder-gray-600 mt-6 focus:outline-0"
            placeholder="Nid Number"
            value={formData.nidNumber}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="license"
            className="pb-4 rounded border-b border-gray-200 block w-full placeholder-gray-600 mt-6 focus:outline-0"
            placeholder="Driving License"
            value={formData.license}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Summary Section */}
      <div className="relative md:pb-20 pb-9 px-4 sm:px-0 md:px-6">
        <div className="grid grid-cols-12">
          <div className="lg:col-start-1 md:col-start-0 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
            <div className="lg:mt-12 md:mt-8 mt-8 lg:ml-0 md:ml-0 ml-0 col-span-10">
              <p className="text-xl font-semibold leading-tight text-gray-800">
                Order Summary
              </p>
              <div className="sm:flex items-start mt-10">
                <div className="sm:w-48 w-full">
                  <img
                    src={
                      carImage ||
                      "https://tuk-cdn.s3.amazonaws.com/can-uploader/Rectangle%20193.png"
                    }
                    className="w-full"
                    alt="Car Image"
                  />
                </div>
                <div className="flex items-start justify-between w-full">
                  <div className="sm:ml-8">
                    <p className="text-lg font-medium leading-none text-gray-800 mt-6 sm:mt-0">
                      {carName || "Car Name"}
                    </p>
                    <p className="text-base leading-none text-gray-600 mt-4">
                      Booking Date: {date || "N/A"}
                    </p>
                    <p className="text-base leading-none text-gray-600 mt-4">
                      Start Time: {startTime || "N/A"}
                    </p>
                    <p className="text-base leading-none text-gray-600 mt-4">
                      Additional Features:
                      {additionalFeatures?.insurance ? " Insurance" : ""}
                      {additionalFeatures?.gps ? ", GPS" : ""}
                      {additionalFeatures?.childSeat ? ", Child Seat" : ""}
                    </p>
                  </div>
                  <p className="text-lg font-semibold leading-none text-gray-800 mt-6 sm:mt-0">
                    ${price || "0"}
                  </p>
                </div>
              </div>

              <div className="product-container">
                <div className="flex justify-between mt-6">
                  <div className="title">
                    <p className="text-lg leading-none text-gray-600">
                      Additional Feature Charges
                    </p>
                  </div>
                  <div className="price">
                    <p className="text-lg font-semibold leading-none text-gray-600">
                      ${calculateAdditionalFeatures()}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between mt-6">
                  <div className="title">
                    <p className="text-lg leading-none text-gray-600">
                      Total Charges
                    </p>
                  </div>
                  <div className="price">
                    <p className="text-lg font-semibold leading-none text-gray-600">
                      ${calculateTotalPrice()}
                    </p>
                  </div>
                </div>

                <hr className="w-full bg-gray-200 border mt-6 h-[1px]" />
                <div className="flex justify-between mt-6">
                  <div className="title">
                    <p className="text-2xl font-semibold leading-normal text-gray-800">
                      Total
                    </p>
                  </div>
                  <div className="price">
                    <p className="text-2xl font-semibold leading-normal text-gray-800">
                      ${calculateTotalPrice()}
                    </p>
                  </div>
                </div>

                <hr className="w-full bg-gray-200 border mt-6 h-[1px]" />

                {/* Payment Method */}
                <div className="grid grid-cols-12 lg:mt-16 md:mt-16 mt-8">
                  <div className="sm:col-start-1 col-start-1 sm:col-span-10 col-span-12 md:col-span-12 lg:px-0 sm:px-0 md:px-0">
                    <p className="text-xl font-semibold leading-tight text-gray-800">
                      Payment Method
                    </p>
                    <div className="flex md:flex-row flex-col">
                      <input
                        type="text"
                        name="cardName"
                        className="pb-4 rounded border-b border-gray-200 block w-full placeholder-gray-600 mt-6 focus:outline-0"
                        placeholder="Name on Card"
                      />
                      <input
                        type="text"
                        name="cardNumber"
                        className="pb-4 rounded border-b border-gray-200 block w-full placeholder-gray-600 mt-6 md:ml-8 focus:outline-0"
                        placeholder="Card Number"
                      />
                    </div>

                    <div className="flex md:flex-row flex-col">
                      <div className="mx-auto mt-6 w-full">
                        <input
                          type="text"
                          name="expiryDate"
                          className="pb-4 rounded border-b border-gray-200 block w-full placeholder-gray-600 focus:outline-0"
                          placeholder="Expiry Date"
                        />
                      </div>

                      <input
                        type="text"
                        name="cvc"
                        className="pb-4 rounded border-b border-gray-200 block w-full placeholder-gray-600 mt-6 md:ml-8 focus:outline-0"
                        placeholder="CVC"
                      />
                    </div>
                  </div>
                </div>

                <button
                  className="text-base font-medium leading-none text-white bg-gray-800 py-4 w-full hover:bg-gray-700 transform duration-300 ease-in-out"
                  onClick={handleConfirm}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

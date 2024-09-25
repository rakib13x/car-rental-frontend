const Checkout = () => {
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
          />
        </div>
        <div className="col-span-5"></div>
      </div>

      <div className="w-full">
        <div className="w-full px-4 sm:px-0 md:px-6">
          <p className="text-xl font-semibold leading-tight text-gray-800">
            Booking Details
          </p>
          <div className="flex sm:flex-row md:flex-col flex-col lg:flex-row">
            <input
              type="text"
              name="firstName"
              className="pb-4 rounded border-b border-gray-200 block w-full placeholder-gray-600 mt-6 focus:outline-0"
              placeholder="First Name"
            />

            <input
              type="text"
              name="lastName"
              className="pb-4 rounded border-b border-gray-200 block w-full placeholder-gray-600 mt-6 sm:ml-8 md:ml-0 lg:ml-8 focus:outline-0"
              placeholder="Last Name"
            />
          </div>
          <input
            type="text"
            name="address"
            className="pb-4 rounded border-b border-gray-200 block w-full placeholder-gray-600 mt-6 focus:outline-0"
            placeholder="User Address"
          />

          <div className="flex md:flex-row flex-col relative">
            <div className="mx-auto mt-6 w-full">
              <input
                type="text"
                name="city"
                className="pb-4 rounded border-b border-gray-200 block w-full placeholder-gray-600 focus:outline-0"
                placeholder="Town/City"
              />
            </div>
            <div className="mx-auto mt-6 w-full md:ml-8">
              <input
                type="text"
                name="region"
                className="pb-4 rounded border-b border-gray-200 block w-full placeholder-gray-600 focus:outline-0"
                placeholder="Region (optional)"
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
              />
            </div>
            <div className="mx-auto mt-6 w-full md:ml-8">
              <input
                type="text"
                name="country"
                className="pb-4 rounded border-b border-gray-200 block w-full placeholder-gray-600 focus:outline-0"
                placeholder="Country"
              />
            </div>
          </div>
          <input
            type="tel"
            name="phone"
            className="pb-4 rounded border-b border-gray-200 block w-full placeholder-gray-600 mt-6 focus:outline-0"
            placeholder="Phone Number"
          />
          <input
            type="number"
            name="nidNumber"
            className="pb-4 rounded border-b border-gray-200 block w-full placeholder-gray-600 mt-6 focus:outline-0"
            placeholder="Nid Number"
          />
          <input
            type="number"
            name="license"
            className="pb-4 rounded border-b border-gray-200 block w-full placeholder-gray-600 mt-6 focus:outline-0"
            placeholder="Driving License"
          />
          <div className="flex mt-4">
            <input
              type="checkbox"
              className="w-5 h-5 accent-gray-800 lg:mt-5 cursor-pointer"
            />
            <p className="text-sm leading-none text-gray-600 pl-2 lg:mt-6 md:mt-1 mt-1">
              Save this information for next time.
            </p>
          </div>
        </div>
      </div>

      <div className="relative md:pb-20 pb-9 px-4 sm:px-0 md:px-6">
        <div className="grid grid-cols-12">
          <div className="lg:col-start-1 md:col-start-0 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
            <div className="lg:mt-12 md:mt-8 mt-8 lg:ml-0 md:ml-0 ml-0 col-span-10">
              <p className="text-xl font-semibold leading-tight text-gray-800">
                Order Summary
              </p>
              <div className="product-container">
                <div className="sm:flex items-start mt-10">
                  <div className="sm:w-48 w-full">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Rectangle%20193.png"
                      className="w-full"
                      alt=""
                    />
                  </div>
                  <div className="flex items-start justify-between w-full">
                    <div className="sm:ml-8">
                      <p className="text-lg font-medium leading-none text-gray-800 mt-6 sm:mt-0">
                        Car Name
                      </p>
                      <p className="text-base leading-none text-gray-600 mt-4">
                        Color
                      </p>
                      <p className="text-base leading-none text-gray-600 mt-4">
                        Small
                      </p>
                      <p className="text-base leading-none text-gray-600 mt-4">
                        Additional Feature
                      </p>
                    </div>
                    <p className="text-lg font-semibold leading-none text-gray-800 mt-6 sm:mt-0">
                      $pricePerHour
                    </p>
                  </div>
                </div>
                <div className="sm:flex items-start mt-10"></div>

                <div className="flex justify-between mt-6">
                  <div className="title">
                    <p className="text-lg leading-none text-gray-600">
                      Total Charges
                    </p>
                  </div>
                  <div className="price">
                    <p className="text-lg font-semibold leading-none text-gray-600">
                      $80
                    </p>
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <div className="title">
                    <p className="text-lg leading-none text-gray-600">
                      Shipping charges
                    </p>
                  </div>
                  <div className="price">
                    <p className="text-lg font-semibold leading-none text-gray-600">
                      $90
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
                      $170
                    </p>
                  </div>
                </div>
                <hr className="w-full bg-gray-200 border mt-6 h-[1px]" />

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
                <div className="flex w-full md:pt-12 pt-8">
                  <button className="text-base font-medium leading-none text-white bg-gray-800 py-4 w-full hover:bg-gray-700 transform duration-300 ease-in-out">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

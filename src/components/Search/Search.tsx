import { Calendar } from "lucide-react";
import { useState } from "react";

export default function LuxuryCarForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    pickupLocation: "",
    pickupDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full bg-white rounded-3xl shadow-2xl p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
        {/* Title - spans full width on mobile, 1 col on desktop */}
        <div className="lg:col-span-1 flex items-start border-r-2 pr-8 border-gray-300">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 whitespace-nowrap leading-tighter ">
            Need to Rent a<br />
            Luxury Car ?
          </h2>
        </div>

        {/* Full Name */}
        <div className="flex flex-col border-r-2 pr-8 border-gray-300">
          <label
            htmlFor="fullName"
            className="text-lg text-start  font-semibold text-gray-900 mb-0"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-0 py-2 rounded-lg placeholder:start-0 border-none  outline-none transition-all text-gray-900 placeholder-gray-400"
          />
        </div>

        {/* Mobile No */}
        <div className="flex flex-col border-r-2 pr-8 border-gray-300">
          <label
            htmlFor="mobile"
            className="text-lg text-start  font-semibold text-gray-900 mb-0"
          >
            Mobile No
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="Enter Phone no."
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-0 py-2 rounded-lg placeholder:start-0 border-none  outline-none transition-all text-gray-900 placeholder-gray-400"
          />
        </div>

        {/* Pickup Location */}
        <div className="flex flex-col border-r-2 pr-8 border-gray-300">
          <label
            htmlFor="pickupLocation"
            className="text-lg text-start  font-semibold text-gray-900 mb-0"
          >
            Pickup Location
          </label>
          <input
            type="text"
            id="pickupLocation"
            name="pickupLocation"
            placeholder="Enter Location"
            value={formData.pickupLocation}
            onChange={handleChange}
            className="w-full px-0 py-2 rounded-lg placeholder:start-0 border-none  outline-none transition-all text-gray-900 placeholder-gray-400"
          />
        </div>

        {/* Pickup Date */}
        <div className="flex flex-col border-r-2 pr-8 border-gray-300">
          <label
            htmlFor="pickupDate"
            className="text-lg text-start  font-semibold text-gray-900 mb-0"
          >
            Pickup Date
          </label>
          <div className="relative">
            <input
              type="date"
              id="pickupDate"
              name="pickupDate"
              placeholder="mm/dd/yyyy"
              value={formData.pickupDate}
              onChange={handleChange}
              className="w-full px-0 py-2 rounded-lg placeholder:start-0 border-none  outline-none transition-all text-gray-900 placeholder-gray-400"
            />
            {/* <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" /> */}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-end">
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

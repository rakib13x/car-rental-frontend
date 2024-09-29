import React, { useState } from "react";

import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/button";
interface AddModalProps {
  showModal: boolean;
  toggleModal: () => void;
}

const AddModal: React.FC<AddModalProps> = ({ showModal, toggleModal }) => {
  if (!showModal) return null;

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    color: "",
    isElectric: false,
    features: "",
    pricePerHour: "",
    manufacturer: "",
    vehicleType: "",
    carImage: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox" || type === "radio") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else if (type === "file") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files ? files[0] : null,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    toggleModal();
  };
  return (
    <div
      className="py-12 bg-gray-700 bg-opacity-50 transition duration-150 ease-in-out z-10 fixed inset-0 overflow-auto"
      id="modal"
    >
      <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
          {/* Close Icon */}
          <div
            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
            onClick={toggleModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Close"
              className="icon icon-tabler icon-tabler-x"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
          </div>

          {/* Modal Header */}
          <div className="w-full flex justify-center text-gray-600 mb-3">
            <h1 className="text-2xl font-bold text-center mb-6">Add Car</h1>
          </div>

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="grid gap-4">
              <Input
                type="text"
                name="name"
                placeholder="Car Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="color"
                placeholder="Color"
                value={formData.color}
                onChange={handleChange}
                required
              />
              {/* Radio Buttons for isElectric */}
              <div className="flex items-center">
                <label className="text-gray-800 text-sm font-bold mr-4">
                  Electric:
                </label>
                <label className="flex items-center mr-4">
                  <input
                    type="radio"
                    name="isElectric"
                    value="true"
                    checked={formData.isElectric === true}
                    onChange={() =>
                      setFormData((prevState) => ({
                        ...prevState,
                        isElectric: true,
                      }))
                    }
                    className="form-radio h-4 w-4 text-indigo-600"
                  />
                  <span className="ml-2 text-gray-700">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="isElectric"
                    value="false"
                    checked={formData.isElectric === false}
                    onChange={() =>
                      setFormData((prevState) => ({
                        ...prevState,
                        isElectric: false,
                      }))
                    }
                    className="form-radio h-4 w-4 text-indigo-600"
                  />
                  <span className="ml-2 text-gray-700">No</span>
                </label>
              </div>
              <Input
                type="text"
                name="features"
                placeholder="Features"
                value={formData.features}
                onChange={handleChange}
                required
              />
              <Input
                type="number"
                name="pricePerHour"
                placeholder="Price Per Hour"
                value={formData.pricePerHour}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="manufacturer"
                placeholder="Manufacturer"
                value={formData.manufacturer}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="vehicleType"
                placeholder="Vehicle Type"
                value={formData.vehicleType}
                onChange={handleChange}
                required
              />
              {/* Input for Car Image */}
              <Input
                type="file"
                name="carImage"
                accept="image/*"
                onChange={handleChange}
              />
              {/* Action Buttons */}
              <div className="flex items-center justify-start w-full mt-4">
                <Button type="submit">Submit</Button>
                <button
                  type="button"
                  className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:bg-gray-200 border rounded px-8 py-2 text-sm"
                  onClick={toggleModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModal;

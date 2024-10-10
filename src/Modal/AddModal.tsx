import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/button";
import { useCreateCarMutation } from "../redux/features/cars/carApi";
import Swal from "sweetalert2"; // Import SweetAlert

interface AddModalProps {
  showModal: boolean;
  toggleModal: () => void;
  refetchCars: () => void;
}

const AddModal: React.FC<AddModalProps> = ({
  showModal,
  toggleModal,
  refetchCars,
}) => {
  const { control, handleSubmit, reset } = useForm();
  const [createCar, { isLoading }] = useCreateCarMutation();

  const onSubmit = async (data: any) => {
    const formData = new FormData();

    // Log raw data for debugging
    console.log("Raw submitted data:", data);

    // Append the image file
    if (data.carImage && data.carImage[0]) {
      formData.append("image", data.carImage[0]);
    }

    // Append other fields
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("color", data.color);
    formData.append("isElectric", data.isElectric); // Send boolean directly
    formData.append(
      "features",
      JSON.stringify(
        data.features.split(",").map((feature: string) => feature.trim())
      )
    );
    formData.append("pricePerHour", String(parseFloat(data.pricePerHour)));
    formData.append("Manufacturers", data.Manufacturers);
    formData.append("vehicleType", data.vehicleType);

    try {
      await createCar(formData).unwrap();
      toggleModal();
      reset();

      // Refetch cars list after success
      refetchCars();

      // SweetAlert success
      Swal.fire({
        icon: "success",
        title: "Car added!",
        text: "The car was added successfully.",
        showConfirmButton: true,
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error creating car:", error);

      // SweetAlert error
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again.",
        showConfirmButton: true,
        confirmButtonText: "OK",
      });
    }
  };

  if (!showModal) return null;

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

          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <div className="grid gap-4">
              {/* Car Name */}
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Car Name" />
                )}
              />

              {/* Description */}
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Description" />
                )}
              />

              {/* Color */}
              <Controller
                name="color"
                control={control}
                render={({ field }) => <Input {...field} placeholder="Color" />}
              />

              {/* Is Electric */}
              <div className="flex items-center">
                <label className="text-gray-800 text-sm font-bold mr-4">
                  Electric:
                </label>
                <Controller
                  name="isElectric"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="checkbox"
                      {...field}
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  )} // Boolean as boolean
                />
              </div>

              {/* Features */}
              <Controller
                name="features"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Features (comma separated)" />
                )}
              />

              {/* Price Per Hour */}
              <Controller
                name="pricePerHour"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="number"
                    placeholder="Price Per Hour"
                  />
                )}
              />

              {/* Manufacturer */}
              <Controller
                name="Manufacturers"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Manufacturers" />
                )}
              />

              {/* Vehicle Type */}
              <Controller
                name="vehicleType"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Vehicle Type" />
                )}
              />

              {/* Car Image */}
              <Controller
                name="carImage"
                control={control}
                render={({ field }) => (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => field.onChange(e.target.files)}
                  />
                )}
              />

              {/* Action Buttons */}
              <div className="flex items-center justify-start w-full mt-4">
                <Button type="submit" disabled={isLoading}>
                  Submit
                </Button>
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

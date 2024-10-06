import React from "react";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/button";
import { useReturnCarMutation } from "../redux/features/booking/bookingAPi";

interface ReturnModalProps {
  showModal: boolean;
  toggleModal: () => void;
  bookingId: string | null;
  refetchBookings: () => void;
}

const ReturnModal: React.FC<ReturnModalProps> = ({
  showModal,
  toggleModal,
  bookingId,
  refetchBookings,
}) => {
  const { control, handleSubmit, reset } = useForm();
  const [returnCar, { isLoading }] = useReturnCarMutation();

  const onSubmit = async (data: any) => {
    if (!bookingId) return;

    try {
      // Send the endTime and bookingId to the backend
      await returnCar({ bookingId, endTime: data.endTime }).unwrap();

      toggleModal();
      reset(); // Reset the form after submission

      // Refetch bookings after successful return
      refetchBookings();

      // Show success message with SweetAlert2
      Swal.fire({
        icon: "success",
        title: "Car returned!",
        text: "The car was returned successfully.",
        showConfirmButton: true,
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error returning car:", error);

      // Show error message with SweetAlert2
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
            <h1 className="text-2xl font-bold text-center mb-6">Return Car</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              {/* End Time */}
              <Controller
                name="endTime"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="End Time (e.g., 18:00)" />
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

export default ReturnModal;

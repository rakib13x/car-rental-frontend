import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner"; // Optional for showing notifications
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/button";
import { setUser } from "../redux/features/authSlice";
import { useUpdateUserMutation } from "../redux/features/users/userApi";

interface UpdateModalProps {
  updateShowModal: boolean;
  updateToggleModal: () => void;
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    profilePhoto?: string;
  } | null;
}

const UpdateProfileModal: React.FC<UpdateModalProps> = ({
  updateShowModal,
  updateToggleModal,
  user,
}) => {
  if (!updateShowModal || !user) return null;

  const dispatch = useDispatch();
  const [updateUser] = useUpdateUserMutation();
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    address: user.address || "",
    profilePhoto: null as File | null,
  });

  // Optional: Update formData when user changes
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
        profilePhoto: null,
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prevState) => ({
        ...prevState,
        profilePhoto: files ? files[0] : null,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("name", formData.name);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("phone", formData.phone);
      formDataToSubmit.append("address", formData.address);

      if (formData.profilePhoto) {
        formDataToSubmit.append("profilePhoto", formData.profilePhoto);
      }

      // Update the user profile in the backend and get the updated user data
      const updatedUserResponse = await updateUser({
        userId: user.id,
        formData: formDataToSubmit,
      }).unwrap();

      // Extract the actual user data from the response (updatedUserResponse.data)
      const updatedUser = updatedUserResponse.data;

      // Dispatch the updated user to Redux store (only serializable user data)
      dispatch(setUser({ user: updatedUser, token: null }));

      toast.success("Profile updated successfully!");
      updateToggleModal(); // Close the modal on success
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile. Please try again.");
    }
  };

  return (
    <div
      className="py-12 bg-gray-700 bg-opacity-50 transition duration-150 ease-in-out z-10 fixed inset-0 overflow-auto"
      id="modal"
    >
      <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
          <div
            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
            onClick={updateToggleModal}
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

          <div className="w-full flex justify-center text-gray-600 mb-3">
            <h1 className="text-2xl font-bold text-center mb-6">
              Update Profile
            </h1>
          </div>

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="grid gap-4">
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
              />

              {/* Input for Profile Image */}
              <Input
                type="file"
                name="profilePhoto"
                accept="image/*"
                onChange={handleChange}
              />

              <div className="flex items-center justify-start w-full mt-4">
                <Button type="submit">Update</Button>
                <button
                  type="button"
                  className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:bg-gray-200 border rounded px-8 py-2 text-sm"
                  onClick={updateToggleModal}
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

export default UpdateProfileModal;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/button";
import { useSignupMutation } from "../../redux/features/authApi";
import { setUser } from "../../redux/features/authSlice";

const Signup = () => {
  const [signup, { isLoading }] = useSignupMutation();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    profilePhoto: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, profilePhoto: file });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long!");
      return;
    }

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("phone", formData.phone);
    formDataToSubmit.append("address", formData.address);
    formDataToSubmit.append("password", formData.password);

    if (formData.profilePhoto) {
      formDataToSubmit.append("profilePhoto", formData.profilePhoto);
    }

    try {
      console.log("Sending signup request...");
      const response = await signup(formDataToSubmit).unwrap();
      console.log("Response received:", response);

      if (response?.data) {
        dispatch(setUser({ user: response.data }));
        toast.success("Signup successful!");
      } else {
        toast.error("Signup failed. Please try again.");
      }
    } catch (error: any) {
      console.error("Signup error:", error);

      if (error.data && error.data.errors) {
        error.data.errors.forEach((err: any) => {
          toast.error(`${err.path}: ${err.message}`);
        });
      } else {
        toast.error("Signup failed. Please check your information.");
      }
    } finally {
      console.log("Signup request completed."); // Confirm completion
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
      <div className="p-8 md:py-12 xl:py-20">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

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
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              {/* Input for Profile Image */}
              <Input
                type="file"
                name="profilePhoto"
                accept="image/*"
                onChange={handleFileChange}
              />

              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Signing up..." : "Sign Up"}
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="relative h-full min-h-[240px]">
        <img
          src="/car-1.jpg"
          className="object-cover"
          alt="Signup illustration"
        />
      </div>
    </div>
  );
};

export default Signup;

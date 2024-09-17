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
  });

  // Handle form field change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);
    try {
      const response = await signup(formData).unwrap(); // Signup mutation
      if (response?.data) {
        dispatch(
          setUser({
            user: response.data, // Assuming server returns user data
          })
        );
        toast.success("Signup successful!");
      } else {
        toast.error("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Signup failed. Please check your information.");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
      <div className="p-8 md:py-12 xl:py-20">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
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

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Input } from "../../components/ui/Input";
import { useLoginMutation } from "../../redux/features/authApi";
import { setUser } from "../../redux/features/authSlice";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const SignIn = () => {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await login(formData).unwrap();

      dispatch(setUser({ user: response.data, token: response.token }));
      console.log("Token created:", response.token);
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      toast.error("Login failed. Please check your email and password.");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
      <div className="p-8 md:py-12 xl:py-20">
        <div className="max-w-md mx-auto">
          <SectionTitle
            title={"Welcome back, User"}
            subtitle={"please enter your details"}
            align={"center"}
          />

          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="rounded-full bg-cyan-500 text-white hover:bg-cyan-600"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Log in"}
              </button>
            </div>

            <div className="mt-4 text-center">
              <p>
                Don&apos;t have an account?{" "}
                <a href="/signup" className="underline">
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="relative h-full min-h-[240px]">
        <img src="/car-1.jpg" className="object-cover" alt="Login decoration" />
      </div>
    </div>
  );
};

export default SignIn;

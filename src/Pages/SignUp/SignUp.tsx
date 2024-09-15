import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/button";

const SignUp = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
      <div className="p-8 md:py-12 xl:py-20">
        <div className="max-w-md mx-auto">
          <SectionTitle
            title={"Welcome back, User"}
            subtitle={"please enter your details"}
            align={"center"}
          />

          <form action="/">
            <div className="mx-auto text-center">
              <Button className="rounded-full w-full bg-white hover:bg-slate-50 text-gray-700">
                <FcGoogle size={"24"} className="mr-2" />
                Log in with Google
              </Button>
            </div>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-4 text-gray-400">or</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>
            <div className="grid gap-4">
              <Input type="text" name="email" placeholder="Email" />
              <Input type="text" name="username" placeholder="User Name" />
              <Input type="password" name="password" placeholder="Password" />
              <div className="flex gap-4 items-center">
                <div className="flex-grow"></div>
                <Link to="/" className="text-sm font-medium leading-none">
                  Forget your password?
                </Link>
              </div>
              <button className="rounded-full bg-cyan-500 text-white hover:bg-cyan-600">
                Register
              </button>
            </div>

            <div className="mt-4 gap-4 text-center">
              <p>
                Don&apos;t have an account?{" "}
                <Link to="/login" className="underline">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="relative h-full min-h-[240px]">
        <img
          src="/car-1.jpg"
          className="object-cover"
          alt="404 decoration image"
        />
      </div>
    </div>
  );
};

export default SignUp;

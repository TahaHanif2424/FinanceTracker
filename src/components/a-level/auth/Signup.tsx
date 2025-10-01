import { useState } from "react";
import Input from "../../c-level/Input";
import Button from "../../c-level/Button";
import { useFormik } from "formik";
import { signupSchema } from "./Schema"; // <-- You'll need a separate schema for signup
import { signup } from "./functions";   // <-- Replace with your signup API call
import type { AuthProp } from "./types";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User, Loader2, UserPlus } from "lucide-react";

export default function Signup({ changeMode }: AuthProp) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: signupSchema, // should validate name, email, password, confirmPassword
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values) => {
        setIsLoading(true);
        try {
          const response = await signup(values);
          if (response) {
            localStorage.setItem(
              "currentUser",
              JSON.stringify({
                id: response.userId,
                email: values.email,
                name: values.name,
              })
            );
            navigate("/auth?mode=login");
          }
        } catch (error) {
          console.error("Signup failed:", error);
        } finally {
          setIsLoading(false);
        }
      },
    });

  return (
    <div className="relative bg-white backdrop-blur-md p-12 rounded-3xl shadow-2xl w-full max-w-lg border border-career-lightGray animate-fade-in">
      {/* gradient background overlay */}

      <div className="relative z-10">
        {/* header */}
        <h2 className="text-xl font-semibold text-center text-career-darkGreen mb-8">Sign Up</h2>

        {/* form */}
        <form className="space-y-2" onSubmit={handleSubmit}>
          {/* name */}
          <div>
            <label className="block text-career-darkGreen font-medium mb-2 text-base">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-career-mediumGreen w-5 h-5" />
              <Input
                type="text"
                name="name"
                className={`w-full pl-12 pr-4 py-2 text-base border-2 rounded-xl transition-all duration-200 ${
                  errors.name && touched.name
                    ? "border-red-400 bg-red-50 focus:border-red-500"
                    : "border-career-lightGray hover:border-career-mediumGreen focus:border-career-darkGreen bg-white"
                } focus:outline-none focus:ring-4 focus:ring-career-mediumGreen/30`}
                placeholder="John Doe"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.name && touched.name && (
              <p className="text-red-500 text-sm mt-2">{errors.name}</p>
            )}
          </div>

          {/* email */}
          <div>
            <label className="block text-career-darkGreen font-medium mb-2 text-base">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-career-mediumGreen w-5 h-5" />
              <Input
                type="email"
                name="email"
                className={`w-full pl-12 pr-4 py-2 text-base border-2 rounded-xl transition-all duration-200 ${
                  errors.email && touched.email
                    ? "border-red-400 bg-red-50 focus:border-red-500"
                    : "border-career-lightGray hover:border-career-mediumGreen focus:border-career-darkGreen bg-white"
                } focus:outline-none focus:ring-4 focus:ring-career-mediumGreen/30`}
                placeholder="you@example.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>

          {/* password */}
          <div>
            <label className="block text-career-darkGreen font-medium mb-2 text-base">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-career-mediumGreen w-5 h-5" />
              <Input
                type="password"
                name="password"
                className={`w-full pl-12 pr-4 py-2 text-base border-2 rounded-xl transition-all duration-200 ${
                  errors.password && touched.password
                    ? "border-red-400 bg-red-50 focus:border-red-500"
                    : "border-career-lightGray hover:border-career-mediumGreen focus:border-career-darkGreen bg-white"
                } focus:outline-none focus:ring-4 focus:ring-career-mediumGreen/30`}
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.password && touched.password && (
              <p className="text-red-500 text-sm mt-2">{errors.password}</p>
            )}
          </div>

          {/* confirm password */}
          <div>
            <label className="block text-career-darkGreen font-medium mb-2 text-base">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-career-mediumGreen w-5 h-5" />
              <Input
                type="password"
                name="confirmPassword"
                className={`w-full pl-12 pr-4 py-2 text-base border-2 rounded-xl transition-all duration-200 ${
                  errors.confirmPassword && touched.confirmPassword
                    ? "border-red-400 bg-red-50 focus:border-red-500"
                    : "border-career-lightGray hover:border-career-mediumGreen focus:border-career-darkGreen bg-white"
                } focus:outline-none focus:ring-4 focus:ring-career-mediumGreen/30`}
                placeholder="Re-enter your password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="text-red-500 text-sm mt-2">{errors.confirmPassword}</p>
            )}
          </div>

          {/* button */}
          <div className="mt-6">
            <Button
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Creating Account...
                </>
              ) : (
                <>
                  <UserPlus className="w-5 h-5" />
                  Sign Up
                </>
              )}
            </Button>
          </div>
        </form>

        {/* footer */}
        <div className="mt-8 text-center flex justify-center">
          <p className="text-career-mediumGreen text-base flex">
            Already have an account?{" "}
            <p
              onClick={changeMode}
              className="font-semibold text-career-darkGreen hover:underline cursor-pointer"
            >
              Sign In
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

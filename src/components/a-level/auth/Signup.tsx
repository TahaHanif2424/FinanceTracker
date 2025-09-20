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
            navigate("/dashboard");
          }
        } catch (error) {
          console.error("Signup failed:", error);
        } finally {
          setIsLoading(false);
        }
      },
    });

  return (
    <div className="bg-white px-10 py-8 rounded-2xl shadow-xl w-full max-w-md border border-career-lightGray">
      {/* Header */}
      
      <h2 className="text-lg font-semibold text-center text-career-darkGreen mb-6">Sign Up</h2>

      {/* Form */}
      <form className="space-y-2" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-career-darkGreen mb-2">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-career-mediumGreen w-5 h-5" />
            <Input
              type="text"
              placeholder="John Doe"
              value={values.name}
              onChange={handleChange}
              className="pl-10"
            />
          </div>
          {errors.name && touched.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-career-darkGreen mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-career-mediumGreen w-5 h-5" />
            <Input
              type="email"
              placeholder="you@example.com"
              value={values.email}
              onChange={handleChange}
              className="pl-10"
            />
          </div>
          {errors.email && touched.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-career-darkGreen mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-career-mediumGreen w-5 h-5" />
            <Input
              type="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              className="pl-10"
            />
          </div>
          {errors.password && touched.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-career-darkGreen mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-career-mediumGreen w-5 h-5" />
            <Input
              type="password"
              placeholder="Re-enter your password"
              value={values.confirmPassword}
              onChange={handleChange}
              className="pl-10"
            />
          </div>
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button mode="simple" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" />
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

      {/* Footer */}
      <div className="mt-6 text-center flex justify-center">
        <p className="text-sm text-career-mediumGreen flex">
          Already have an account?{" "}
          <p
            onClick={changeMode}
            className="font-semibold text-career-darkGreen hover:underline"
          >
            Sign In
          </p>
        </p>
      </div>
    </div>
  );
}

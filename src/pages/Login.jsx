
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      password: Yup.string()
        .min(3, "Password must be at least 3 characters")
        .required("Password is required"),
    }),

    onSubmit: (values) => {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home", { replace: true });
    },
  });

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
      >
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome to Login Page
          </h2>
          <p className="text-gray-500 mt-2">
            Login to your account
          </p>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-300 rounded-lg p-3"
          />

          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.email}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">
            Password
          </label>

          <input
             type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-300 rounded-lg p-3"
          />

          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.password}
            </p>
          )}
          <label className="mt-2 flex cursor-pointer items-center gap-2 text-sm text-gray-600">
  <input
    type="checkbox"
    checked={showPassword}
    onChange={(e) => setShowPassword(e.target.checked)}
    className="h-4 w-4 accent-blue-600"
  />
  Show Password
</label>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700"
        >
          Login
        </button>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="text-purple-600 font-semibold hover:underline"
          >
            Sign Up
          </button>
        </p>
      </form>
    </section>
  );
};

export default Login;

"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step3Schema } from "@/lib/schema";

export default function Step3({ next, prev, defaultValues }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(step3Schema),
    defaultValues,
  });

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit(next)}>
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
          Account Setup
        </h2>
        <div className="space-y-5">
          <div>
            <input
              {...register("username", { required: "Username is required" })}
              placeholder="Username"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {typeof errors.username?.message === "string" && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {typeof errors.password?.message === "string" && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
              })}
              placeholder="Confirm Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {typeof errors.confirmPassword?.message === "string" && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div className="flex justify-between space-x-4">
            <button
              type="button"
              className="w-full md:w-auto py-2 px-4 border border-gray-300 text-gray-700 bg-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={prev}
            >
              ⬅️ Previous
            </button>
            <button
              type="submit"
              className="w-full md:w-auto py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema } from "@/lib/schema";

export default function Step1({ next, defaultValues }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(step1Schema),
    defaultValues,
  });

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit(next)}>
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
          Personal Information
        </h2>
        <div className="space-y-5">
          <div>
            <input
              {...register("fullName", { required: "Full Name is required" })}
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {typeof errors.fullName?.message === "string" && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
            {/* {errors.fullName?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )} */}
          </div>

          <div>
            <input
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {typeof errors.email?.message === "string" && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
            {/* {errors.email?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )} */}
          </div>

          <div>
            <input
              {...register("phone", { required: "Phone Number is required" })}
              placeholder="Phone Number"
              type="tel"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {typeof errors.phone?.message === "string" && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
            {/* {errors.phone?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )} */}
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step2Schema } from "@/lib/schema";

export default function Step2({ next, prev, defaultValues }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(step2Schema),
    defaultValues,
  });

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit(next)}>
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
          Address Details
        </h2>
        <div className="space-y-5">
          <div>
            <input
              {...register("street", {
                required: "Street Address is required",
              })}
              placeholder="Street Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {typeof errors.street?.message === "string" && (
              <p className="text-red-500 text-sm mt-1">
                {errors.street.message}
              </p>
            )}
            {/* {errors.street?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.street.message}
              </p>
            )} */}
          </div>

          <div>
            <input
              {...register("city", { required: "City is required" })}
              placeholder="City"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {typeof errors.city?.message === "string" && (
              <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
            )}
            {/* {errors.city?.message && (
              <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
            )} */}
          </div>

          <div>
            <input
              {...register("zip", { required: "Zip Code is required" })}
              placeholder="Zip Code"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {typeof errors.zip?.message === "string" && (
              <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>
            )}
            {/* {errors.zip?.message && (
              <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>
            )} */}
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

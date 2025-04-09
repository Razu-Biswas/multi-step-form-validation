"use client";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { submitForm } from "@/lib/api";
import toast, { Toaster } from "react-hot-toast";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function Summary({ data, prev, reset }: any) {
  const [submissionHistory, setSubmissionHistory] = useState<any[]>([]);
  const [showConfirmClear, setShowConfirmClear] = useState(false);

  const mutation = useMutation({
    mutationFn: submitForm,
    onSuccess: () => {
      const timestamp = new Date().toISOString();
      const newEntry = { ...data, submittedAt: timestamp };

      const updatedHistory = [newEntry, ...submissionHistory];
      setSubmissionHistory(updatedHistory);
      localStorage.setItem("submissionHistory", JSON.stringify(updatedHistory));

      alert(
        "✅ Form submitted successfully!  and stored successfully! See Submit History go to summary page"
      );
      reset();
    },
  });

  useEffect(() => {
    const stored = localStorage.getItem("submissionHistory");
    if (stored) {
      setSubmissionHistory(JSON.parse(stored));
    }
  }, []);

  const clearSubmissionHistory = () => {
    localStorage.removeItem("submissionHistory");
    setSubmissionHistory([]);
    setShowConfirmClear(false);

    toast.custom(
      <div className="flex items-center gap-2 bg-red-100 text-red-800 px-4 py-3 rounded-md shadow">
        <TrashIcon className="h-5 w-5 text-red-600" />
        <span>Submission history cleared!</span>
      </div>,
      { duration: 2000, position: "top-right" }
    );
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl relative">
      <Toaster position="top-right" />

      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        🚀 Summary
      </h2>

      <ul className="space-y-4 text-sm md:text-base">
        {Object.entries(data).map(([key, val]) => (
          <li
            key={key}
            className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3"
          >
            <span className="font-semibold capitalize text-gray-700">
              {key.replace(/([A-Z])/g, " $1")}:
            </span>{" "}
            <span className="text-gray-600">
              {typeof val === "string" || typeof val === "number"
                ? val
                : JSON.stringify(val)}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center mt-8 gap-4">
        <button
          type="button"
          className="w-full py-2 px-4 text-gray-700 font-semibold border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={prev}
        >
          ⬅️ Previous
        </button>

        <button
          type="button"
          className={`w-full py-2 px-4 font-semibold text-white rounded-lg transition duration-200 ${
            mutation.isPending
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
          onClick={() => mutation.mutate(data)}
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Submitting ... " : "✅ Submit"}
        </button>
      </div>

      {submissionHistory.length > 0 && (
        <div className="mt-10 p-4 bg-green-50 border border-green-200 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-green-700">
              📜 Submission History
            </h3>
            <button
              onClick={() => setShowConfirmClear(true)}
              className="text-sm text-red-600 hover:underline"
            >
              🗑️ Clear History
            </button>
          </div>

          <ul className="space-y-3 text-sm text-green-900 max-h-64 overflow-auto">
            {submissionHistory.map((entry, index) => (
              <li
                key={index}
                className="p-3 border border-green-200 bg-white rounded-md"
              >
                <div className="text-xs text-gray-500 mb-1">
                  Submitted: {new Date(entry.submittedAt).toLocaleString()}
                </div>
                <ul className="space-y-1">
                  {Object.entries(entry).map(([key, val]) =>
                    key === "submittedAt" ? null : (
                      <li key={key}>
                        <strong className="capitalize">
                          {key.replace(/([A-Z])/g, " $1")}:
                        </strong>{" "}
                        {typeof val === "string" || typeof val === "number"
                          ? val
                          : JSON.stringify(val)}
                      </li>
                    )
                  )}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmClear && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              ⚠️ Confirm Clear
            </h4>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to clear all stored submission history? This
              action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirmClear(false)}
                className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={clearSubmissionHistory}
                className="px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-700"
              >
                Yes, Clear
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

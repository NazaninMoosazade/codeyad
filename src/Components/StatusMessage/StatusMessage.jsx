import React from "react";

const icons = {
  loading: (
    <svg
      className="w-5 h-5 animate-spin text-blue"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16 8 8 0 01-8-8z"
      ></path>
    </svg>
  ),
  error: (
    <svg
      className="w-5 h-5 text-red-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  success: (
    <svg
      className="w-5 h-5 text-green-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  ),
};

const colors = {
  loading: "text-blue",
  error: "text-red-600",
  success: "text-green-600",
};

export default function StatusMessage({ status = "loading", message = "" }) {
  return (
    <div
      className={`w-full flex justify-center items-center gap-2 py-4 font-DanaDemiBold text-lg ${colors[status]}`}
    >
      {icons[status]}
      <span>{message}</span>
    </div>
  );
}

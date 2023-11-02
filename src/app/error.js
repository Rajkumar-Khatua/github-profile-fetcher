"use client";
import { useRouter } from "next/router";

export default function Error({ statusCode }) {
  const title = statusCode
    ? `Oops! An error ${statusCode} occurred on the server`
    : "Oops! An error occurred on your side";

  const refreshPage = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tl from-slate-100 to-red-100">
      <h1 className="text-6xl font-bold text-gray-800">{title}</h1>
      <p className="mt-4 text-xl text-gray-700">
        We're sorry for the inconvenience. Our team has been notified and will
        fix the issue as soon as possible.
      </p>
      <button
        onClick={refreshPage}
        className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Refresh Page
      </button>
    </div>
  );
}

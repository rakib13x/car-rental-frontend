import React from "react";
import { useRouteError } from "react-router-dom";

interface ErrorPageProps {}

const ErrorPage: React.FC<ErrorPageProps> = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg">
        {error instanceof Error
          ? error.message
          : "An unexpected error occurred."}
      </p>
      <button
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => (window.location.href = "/")}
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;

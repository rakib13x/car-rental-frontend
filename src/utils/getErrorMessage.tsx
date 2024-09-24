import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export function getErrorMessage(
  error: FetchBaseQueryError | SerializedError | undefined
): string {
  if (!error) return "Unknown error occurred";

  if ("status" in error) {
    // error is FetchBaseQueryError
    if (typeof error.data === "string") {
      // If error.data is a string, return it directly
      return error.data;
    } else if (
      error.data &&
      typeof error.data === "object" &&
      "message" in error.data &&
      typeof (error.data as any).message === "string"
    ) {
      // If error.data is an object with a message property
      return (error.data as { message: string }).message;
    } else {
      // Default message for FetchBaseQueryError
      return "An unexpected error occurred";
    }
  } else {
    // error is SerializedError
    return error.message || "An unexpected error occurred";
  }
}

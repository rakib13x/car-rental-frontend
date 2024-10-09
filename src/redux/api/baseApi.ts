// import {
//   BaseQueryApi,
//   BaseQueryFn,
//   DefinitionType,
//   FetchArgs,
//   createApi,
//   fetchBaseQuery,
// } from "@reduxjs/toolkit/query/react";
// import { RootState } from "../store";

// import { toast } from "sonner";
// import { logout, setUser } from "../features/authSlice";

// const baseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:4000/api/v1",
//   credentials: "include",
//   prepareHeaders: (headers, { getState }) => {
//     const token = (getState() as RootState).auth.token;

//     if (token) {
//       headers.set("authorization", ` Bearer ${token}`);
//     }

//     return headers;
//   },
// });

// const baseQueryWithRefreshToken: BaseQueryFn<
//   FetchArgs,
//   BaseQueryApi,
//   DefinitionType
// > = async (args, api, extraOptions): Promise<any> => {
//   let result = await baseQuery(args, api, extraOptions);

//   if (result?.error?.status === 404) {
//     toast.error(result.error.data.message);
//   }
//   if (result?.error?.status === 403) {
//     toast.error(result.error.data.message);
//   }
//   if (result?.error?.status === 401) {
//     //* Send Refresh
//     console.log("Sending refresh token");

//     const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
//       method: "POST",
//       credentials: "include",
//     });

//     const data = await res.json();

//     if (data?.data?.accessToken) {
//       const user = (api.getState() as RootState).auth.user;

//       api.dispatch(
//         setUser({
//           user,
//           token: data.data.accessToken,
//         })
//       );

//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       api.dispatch(logout());
//     }
//   }

//   return result;
// };

// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: baseQueryWithRefreshToken,
//   tagTypes: ["Cars", "Bookings", "Users"],
//   endpoints: () => ({}),
// });

import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query/react";
import { toast } from "sonner";
import { logout, setUser } from "../features/authSlice";
import { RootState } from "../store";

// Define the base fetch query
const baseQuery = fetchBaseQuery({
  baseUrl: "https://assignment-5-ruby-pi.vercel.app/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

// Define the custom base query with refresh token logic
const baseQueryWithRefreshToken: BaseQueryFn<
  string | FetchArgs,
  unknown, // Set Result type to unknown
  FetchBaseQueryError,
  {}, // DefinitionExtraOptions
  FetchBaseQueryMeta // Meta type
> = async (args, api, extraOptions) => {
  console.log("Making request to:", args);
  let result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    console.log("Error:", result.error);
    const { status, data } = result.error;

    // Handle specific error statuses
    if (status === 401) {
      // Attempt to refresh the token
      console.log("Sending refresh token");

      const refreshResponse = await fetch(
        "https://assignment-5-ruby-pi.vercel.app/api/v1/auth/refresh-token",
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (refreshResponse.ok) {
        const refreshData = await refreshResponse.json();

        if (refreshData?.data?.accessToken) {
          // Update the token in the Redux store
          api.dispatch(
            setUser({
              user: refreshData.user,
              token: refreshData.data.accessToken,
            })
          );

          // Retry the original query with the new token
          result = await baseQuery(args, api, extraOptions);
        } else {
          // Logout if refresh token fails
          api.dispatch(logout());
        }
      } else {
        // Logout if refresh token request fails
        api.dispatch(logout());
      }
    }

    // Handle other error statuses
    if (status === 403 || status === 404) {
      const message =
        (data as { message: string }).message || "An error occurred";
      toast.error(message);
    }
  }

  return result;
};

// Create the base API with the custom base query
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["Cars", "Bookings", "Users"],
  endpoints: () => ({}),
});

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TResponseRedux } from "../../../types/global"; // Assuming you have these types
import { User } from "../../../types/User";

interface GetAllUsersResponse {
  data: {
    data: User[];
    totalPages: number;
    currentPage: number;
    totalItems: number;
  };
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/v1" }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getAllUsers: builder.query<
      GetAllUsersResponse,
      { page: number; limit: number }
    >({
      query: ({ page = 1, limit = 10 }) => {
        const params = new URLSearchParams();
        params.append("page", page.toString());
        params.append("limit", limit.toString());

        return `users?${params.toString()}`;
      },
      transformResponse: (response: any) => {
        return {
          data: response.data,
        };
      },
    }),

    getUserById: builder.query<User, string>({
      query: (userId) => `users/${userId}`,
      providesTags: ["Users"],
      transformResponse: (response: TResponseRedux<User>) => response.data,
    }),

    // Update user to admin
    makeAdmin: builder.mutation<void, { userId: string }>({
      query: ({ userId }) => ({
        url: `users/${userId}/make-admin`,
        method: "PATCH",
      }),
      invalidatesTags: ["Users"],
    }),

    // Update user to normal user
    makeUser: builder.mutation<void, { userId: string }>({
      query: ({ userId }) => ({
        url: `users/${userId}/make-user`,
        method: "PATCH",
      }),
      invalidatesTags: ["Users"],
    }),

    // Block a user
    blockUser: builder.mutation<void, { userId: string }>({
      query: ({ userId }) => ({
        url: `users/${userId}/block`,
        method: "PATCH",
      }),
      invalidatesTags: ["Users"],
    }),

    // Activate a user
    activateUser: builder.mutation<void, { userId: string }>({
      query: ({ userId }) => ({
        url: `users/${userId}/activate`,
        method: "PATCH",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useMakeAdminMutation,
  useMakeUserMutation,
  useBlockUserMutation,
  useActivateUserMutation,
} = userApi;

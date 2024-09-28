// userApi.ts
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
  }),
});

export const { useGetAllUsersQuery, useGetUserByIdQuery } = userApi;

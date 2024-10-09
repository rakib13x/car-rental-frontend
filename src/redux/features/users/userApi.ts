//@ts-nocheck
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TResponseRedux } from "../../../types/global";
import { User } from "../../../types/User";

interface GetAllUsersResponse {
  data: User[];
  totalPages: number;
  currentPage: number;
  totalItems: number;
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assignment-5-ruby-pi.vercel.app/api/v1",
  }),
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
      transformResponse: (response: any): GetAllUsersResponse => {
        return {
          data: response.data.data || [],
          totalPages: response.data.totalPages,
          currentPage: response.data.currentPage,
          totalItems: response.data.totalItems,
        };
      },
      providesTags: (result) =>
        result && result.data
          ? [
              ...result.data.map((user: User) => ({
                type: "Users" as const,
                id: user._id,
              })),
              { type: "Users", id: "LIST" },
            ]
          : [{ type: "Users", id: "LIST" }],
    }),

    getUserById: builder.query<User, string>({
      query: (userId) => `user/${userId}`,
      providesTags: (result, error, userId) => [{ type: "Users", id: userId }],
      transformResponse: (response: TResponseRedux<User>) => response.data,
    }),

    makeAdmin: builder.mutation<void, { userId: string }>({
      query: ({ userId }) => ({
        url: `users/${userId}/make-admin`,
        method: "PATCH",
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),

    makeUser: builder.mutation<void, { userId: string }>({
      query: ({ userId }) => ({
        url: `users/${userId}/make-user`,
        method: "PATCH",
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),

    blockUser: builder.mutation<void, { userId: string }>({
      query: ({ userId }) => ({
        url: `users/${userId}/block`,
        method: "PATCH",
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),

    activateUser: builder.mutation<void, { userId: string }>({
      query: ({ userId }) => ({
        url: `users/${userId}/activate`,
        method: "PATCH",
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),

    updateUser: builder.mutation<User, { userId: string; formData: FormData }>({
      query: ({ userId, formData }) => ({
        url: `users/${userId}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: (result, error, { userId }) => [
        { type: "Users", id: userId },
      ],
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
  useUpdateUserMutation,
} = userApi;

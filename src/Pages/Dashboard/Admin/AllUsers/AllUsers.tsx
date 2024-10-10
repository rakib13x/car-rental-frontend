//@ts-nocheck
import { useState } from "react";
import Swal from "sweetalert2";
import {
  useActivateUserMutation,
  useBlockUserMutation,
  useGetAllUsersQuery,
  useMakeAdminMutation,
  useMakeUserMutation,
} from "../../../../redux/features/users/userApi";

const AllUsers = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetAllUsersQuery({ page, limit: 10 });

  const [makeAdmin] = useMakeAdminMutation();
  const [makeUser] = useMakeUserMutation();
  const [blockUser] = useBlockUserMutation();
  const [activateUser] = useActivateUserMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching users</div>;

  const users = data?.data ?? [];
  console.log("Users:", users);

  // Handle role change to admin
  const handleMakeAdmin = async (userId: string) => {
    try {
      await makeAdmin({ userId }).unwrap();
      Swal.fire("Success", "User role updated to Admin.", "success");
    } catch (error) {
      Swal.fire("Error", "Error making user admin. Please try again.", "error");
    }
  };

  const handleMakeUser = async (userId: string) => {
    try {
      await makeUser({ userId }).unwrap();
      Swal.fire("Success", "User role updated to User.", "success");
    } catch (error) {
      Swal.fire("Error", "Error making user. Please try again.", "error");
    }
  };

  const handleBlockUser = async (userId: string) => {
    try {
      await blockUser({ userId }).unwrap();
      Swal.fire("Success", "User has been blocked.", "success");
    } catch (error) {
      Swal.fire("Error", "Error blocking user. Please try again.", "error");
    }
  };

  const handleActivateUser = async (userId: string) => {
    try {
      await activateUser({ userId }).unwrap();
      Swal.fire("Success", "User has been activated.", "success");
    } catch (error) {
      Swal.fire("Error", "Error activating user. Please try again.", "error");
    }
  };

  return (
    <div>
      <div className="sm:px-6 w-full">
        <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="lg:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Users
            </p>
          </div>
        </div>
        <div className="bg-white px-4 md:px-8 xl:px-10 overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-20 w-full text-sm leading-none text-gray-600">
                <th className="font-normal text-left pl-4">#</th>
                <th className="font-normal text-left pl-11">Name</th>
                <th className="font-normal text-left pl-10">Role</th>
                <th className="font-normal text-left">Created</th>
                <th className="font-normal text-left">Email</th>
                <th className="font-normal text-left">Status</th>
                <th className="font-normal text-center w-32">Actions</th>
                <th className="font-normal text-center w-32">Account Action</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr
                    key={user._id}
                    className="h-20 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white hover:bg-gray-100"
                  >
                    <td className="pl-4">{index + 1}</td>
                    <td className="pl-11">
                      <div className="flex items-center">
                        <img
                          className="shadow-md rounded-full w-10 h-10 mr-3"
                          src={
                            user.profilePhoto ||
                            "https://via.placeholder.com/150"
                          }
                          alt={user.name}
                        />
                        {user.name}
                      </div>
                    </td>
                    <td>
                      <p className="mr-16 pl-10">{user.role}</p>
                    </td>
                    <td>
                      <p className="mr-16">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </p>
                    </td>
                    <td>
                      <p className="mr-12">{user.email}</p>
                    </td>
                    <td>
                      <p className="">{user.status}</p>
                    </td>

                    {/* Role Change Actions */}
                    <td className="pl-16">
                      <div className="flex flex-col items-center justify-center gap-4">
                        <button
                          className="bg-gray-100 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none"
                          onClick={() => handleMakeAdmin(user._id)}
                          disabled={user.role === "admin"}
                        >
                          Make Admin
                        </button>
                        <button
                          className="bg-gray-100 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none"
                          onClick={() => handleMakeUser(user._id)}
                          disabled={user.role === "user"}
                        >
                          Make User
                        </button>
                      </div>
                    </td>

                    {/* Account Status Actions */}
                    <td className="pl-16">
                      <div className="flex flex-col items-center justify-center gap-4">
                        <button
                          className="bg-gray-100 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none"
                          onClick={() => handleBlockUser(user._id)}
                          disabled={user.status === "blocked"}
                        >
                          Block
                        </button>
                        <button
                          className="bg-gray-100 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none"
                          onClick={() => handleActivateUser(user._id)}
                          disabled={user.status === "active"}
                        >
                          Activate
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="text-center py-4">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;

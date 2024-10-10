import { useState } from "react";
import { useGetAllUsersQuery } from "../../../../redux/features/users/userApi";

const AllUsers = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetAllUsersQuery({ page, limit: 10 });
  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching users</div>;

  const users = data?.data?.data ?? [];
  console.log(users);

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
                <th className="font-normal text-center w-32">block</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {users.map((user, index) => (
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
                          user.profilePhoto || "https://via.placeholder.com/150"
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
                    {user.status ? (
                      <p className="">{user.status} </p>
                    ) : (
                      "active"
                    )}
                  </td>
                  <td className="pl-16">
                    <div className="flex flex-col items-center justify-center gap-4">
                      <button className="bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none">
                        Make Admin
                      </button>
                      <button className="bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none">
                        Make User
                      </button>
                    </div>
                  </td>
                  <td className="pl-16">
                    <div className="flex flex-col items-center justify-center gap-4">
                      <button className="bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none">
                        Block
                      </button>
                      <button className="bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none">
                        Active
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UpdateProfileModal from "../../Modal/UpdateProfileModal";
import { selectCurrentUser } from "../../redux/features/authSlice";
import { useAppSelector } from "../../redux/hooks";

const MyProfile = () => {
  const user = useAppSelector(selectCurrentUser);
  const [updateShowModal, setUpdateShowModal] = useState(false); // State to control modal visibility

  const updateToggleModal = () => {
    setUpdateShowModal(!updateShowModal);
  };

  useEffect(() => {
    console.log("Current user in Redux:", user);
  }, [user]);

  return (
    <>
      <section className="w-full overflow-hidden dark:bg-gray-900">
        <div className="flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="User Cover"
            className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]"
          />

          <div className="sm:w-[80%] xs:w-[90%] mx-auto flex">
            <img
              src={
                user?.profilePhoto
                  ? user.profilePhoto
                  : "https://via.placeholder.com/150" // Default placeholder if no profile photo
              }
              alt="User Profile"
              className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]"
            />

            <h1 className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
              {user?.name || "No Name Provided"}
            </h1>
          </div>

          <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
            <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
              <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Full Name
                      </dt>
                      <dd className="text-lg font-semibold">
                        {user?.name || "No Name Provided"}
                      </dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Role
                      </dt>
                      <dd className="text-lg font-semibold">
                        {user?.role || "No Role Assigned"}
                      </dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Address
                      </dt>
                      <dd className="text-lg font-semibold">
                        {user?.address || "No Address Provided"}
                      </dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Phone Number
                      </dt>
                      <dd className="text-lg font-semibold">
                        {user?.phone || "No Phone Number Provided"}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Email
                      </dt>
                      <dd className="text-lg font-semibold">
                        {user?.email || "No Email Provided"}
                      </dd>
                    </div>
                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Joined On
                      </dt>
                      <dd className="text-lg font-semibold">
                        {user?.createdAt
                          ? new Date(user.createdAt).toLocaleDateString()
                          : "Date Not Available"}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-black text-white py-3 rounded-xl w-1/2"
                  onClick={updateToggleModal} // Toggle modal on click
                  disabled={user?.role === "admin"} // Disable button if user is an admin
                >
                  {user?.role === "admin"
                    ? "Admin cannot update profile"
                    : "Update Profile"}
                </button>
              </div>
            </div>

            <div className="my-10 lg:w-[70%] md:h-[14rem] xs:w-full xs:h-[10rem]">
              <h1 className="w-fit font-serif my-4 pb-1 pr-2 rounded-b-md border-b-4 border-blue-600 dark:border-b-4 dark:border-yellow-600 dark:text-white lg:text-4xl md:text-3xl xs:text-xl">
                My Location
              </h1>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.02028974562!2d38.613328040215286!3d8.963479542403238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1710567234587!5m2!1sen!2set"
                className="rounded-lg w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>

            {/* Social Media Icons */}
            <div className="fixed right-2 bottom-20 flex flex-col rounded-sm bg-gray-200 text-gray-500 dark:bg-gray-200/80 dark:text-gray-700 hover:text-gray-600 hover:dark:text-gray-400">
              <Link to="https://www.linkedin.com/in/">
                <div className="p-2 hover:text-primary hover:dark:text-primary">
                  <svg
                    className="lg:w-6 lg:h-6 xs:w-4 xs:h-4 text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                      clip-rule="evenodd"
                    />
                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Update Profile Modal */}
      {user && user.role !== "admin" && (
        <UpdateProfileModal
          updateShowModal={updateShowModal}
          updateToggleModal={updateToggleModal}
          user={{
            id: user._id || "",
            name: user.name || "",
            email: user.email || "",
            phone: user.phone || "",
            address: user.address || "",
            profilePhoto: user.profilePhoto || "",
          }}
        />
      )}
    </>
  );
};

export default MyProfile;

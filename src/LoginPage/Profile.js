import { useState } from "react";
import { useFormik } from "formik";
import { ConvertToBase64 } from "./helper/Converter";
import toast, { Toaster } from "react-hot-toast";
import avatar from "./assets/user.png";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "./store/store";
import useFetch from "./hooks/fetch";
import { updateUser } from "./helper/FetchHelper";

export const Profile = () => {
  const navigate = useNavigate();
  const { email } = userAuth((state) => state.auth);
  const [{ apiData, isLoading, serverError }] = useFetch(`/update`);
  console.log(apiData);
  const [file, setFile] = useState();
  const formik = useFormik({
    initialValues: {
      username: apiData?.username || "",
      firstName: apiData?.firstName || "",
      lastName: apiData?.lastName || "",
      address: apiData?.address || "",
      phoneNumber: apiData?.phoneNumber || "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: async (value) => {
      value = await Object.assign(value, {
        profile: file || apiData?.profile || "",
      });
      console.log(value);
      let promis = updateUser(value);
      toast
        .promise(promis, {
          success: "Successfully updated",
          loading: "loading...!",
          error: promis.error
            ? promis.error.message
            : "Couldn't update profile",
        })
        .then(() => {
          navigate("/home");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  });

  async function handelPhoto(e) {
    const base64 = await ConvertToBase64(e.target.files[0]);
    setFile(base64);
  }

  return (
    <div className="flex flex-col h-screen w-screen items-center">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="h-[500px] mt-16 w-96 border shadow-2xl rounded-2xl flex flex-col ">
        <div className="flex flex-col items-center">
          <label htmlFor="profile">
            <img
              className="h-24 shadow-xl rounded-full cursor-pointer border-4 border-gray-100 w-24 mt-6"
              src={file || avatar}
              alt="avatar"
            />
          </label>
          <input
            id="profile"
            onChange={handelPhoto}
            name="profile"
            type="file"
            className="hidden"
          />
          <h3 className="mt-6 font-bold tracking-tight text-gray-500">
            Happy to have you
          </h3>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="p-7 grid grid-cols-2 gap-3"
        >
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium leading-6 text-gray-500"
            >
              {" "}
              FirstName
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              className=" p-2 font-bold block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium leading-6 text-gray-500"
            >
              {" "}
              LastName
            </label>

            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              className=" p-2 font-bold block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium leading-6 text-gray-500"
            >
              {" "}
              PhoneNumber
            </label>

            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              className=" p-2 font-bold block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium leading-6 text-gray-500"
            >
              {" "}
              UserName
            </label>

            <input
              type="text"
              id="username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              className="p-2 font-bold block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-6 text-gray-500"
            >
              {" "}
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              className="p-2 font-bold block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <button
              type="submit"
              className="flex mt-6 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
          <p className="mt-7 text-center text-sm text-gray-500">
            Already Register?
            <Link
              to="/"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import avatar from "./assets/user.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ConvertToBase64 } from "./helper/Converter";
import { register } from "./helper/FetchHelper";

export const Register = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (value) => {
      value = await Object.assign(value, { profile: file });
      console.log(value);
      let promise = register(value);
      await toast.promise(promise, {
        loading: "Creating...!",
        success: <b>Register Successfully...!</b>,
        error: <b>Could Not Register...! </b>,
      });
      promise.then(() => {
        navigate("/home");
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
        <form onSubmit={formik.handleSubmit} className="p-7">
          <label
            htmlFor="username"
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
            className=" p-2 font-bold block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
          />
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-500"
          >
            {" "}
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className=" p-2 font-bold block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
          />
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-500"
          >
            {" "}
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className=" p-2 font-bold block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
          />
          <div>
            <button
              type="submit"
              className="flex mt-6 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="mt-1 text-center text-sm text-gray-500">
          Already Register?
          <Link
            to="/"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

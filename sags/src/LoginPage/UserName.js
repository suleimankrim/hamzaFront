import avatar from "./assets/user.png";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { userNameValidate } from "./validation/UserNameValidate";
import { Toaster } from "react-hot-toast";
import { userAuth } from "./store/store.js";

export const UserName = () => {
  const setEmail = userAuth((state) => state.setEmail);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validate: userNameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (value) => {
      console.log(value);
      setEmail(value.username);
      navigate("/password");
    },
  });
  return (
    <div className="flex flex-col h-screen w-screen items-center">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="h-[500px] mt-16 w-96 border shadow-2xl rounded-2xl flex flex-col ">
        <div className="flex flex-col items-center">
          <img
            className="h-24 shadow-xl rounded-full cursor-pointer border-4 border-gray-100 w-24 mt-6"
            src={avatar}
            alt="avatar"
          />
          <h3 className="mt-6 font-bold tracking-tight text-gray-500">
            Log in to your account
          </h3>
        </div>
        <form onSubmit={formik.handleSubmit} className="p-7">
          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6 text-gray-500"
          >
            {" "}
            Email Address
          </label>
          <input
            type="email"
            id="username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            className=" p-2 font-bold block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
          />
          <div>
            <button
              type="submit"
              className="flex mt-6 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link
            to="/Register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            {" "}
            register
          </Link>
        </p>
      </div>
    </div>
  );
};

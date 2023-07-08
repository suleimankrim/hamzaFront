import { useFormik } from "formik";
import { passwordValidate } from "./validation/Password";
import toast, { Toaster } from "react-hot-toast";
import avatar from "./assets/user.png";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "./store/store";
import useFetch from "./hooks/fetch";
import { Isloading } from "./helper/Isloading";
import { login } from "./helper/FetchHelper";

export const Password = () => {
  const navigate = useNavigate();
  const { email } = userAuth((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (value) => {
      console.log(value);
      let promise = login(email, value.password);
      toast
        .promise(promise, {
          loading: "loading...!",
          success: "success...!",
          error: promise.error ? promise.error : "invalid password",
        })
        .then((res) => {
          let { token } = res;
          localStorage.setItem("token", token);
          console.log(token);
          navigate("/home");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  });
  const [{ apiData, isLoading, status, serverError }] = useFetch(
    `/useremail/${email}`
  );
  console.log(apiData);
  if (isLoading)
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Isloading />
      </div>
    );
  if (serverError) return <div className="text-2xl">{serverError.message}</div>;
  return (
    <div className="flex flex-col h-screen w-screen items-center">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="h-[500px] mt-16 w-96 border shadow-2xl rounded-2xl flex flex-col ">
        <div className="flex flex-col items-center">
          <img
            className="h-24 shadow-xl rounded-full cursor-pointer border-4 border-gray-100 w-24 mt-6"
            src={apiData?.profile || avatar}
            alt="avatar"
          />
          <h3 className="mt-6 font-bold tracking-tight text-gray-500">
            Hi {apiData?.firstName || apiData?.username} Enter your Password
          </h3>
        </div>
        <form onSubmit={formik.handleSubmit} className="p-7">
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
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Forget your password?
          <Link
            to="/recovery"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            {" "}
            Recover password
          </Link>
        </p>
      </div>
    </div>
  );
};

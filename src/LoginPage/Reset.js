import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { userAuth } from "./store/store";
import { useFormik } from "formik";
import { restPassword } from "./helper/FetchHelper";

export const Reset = () => {
  const email = userAuth((state) => state.auth.email);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    onSubmit: (values) => {
      let promis = restPassword(email, values.password);
      toast
        .promise(promis, {
          success: "password successfully changed",
          error: "Could not change reset password",
          loading: "Waiting for confirmation",
        })
        .then((r) => navigate("/"));
    },
  });
  return (
    <div className="flex flex-col h-screen w-screen items-center">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="h-[500px] mt-16 w-96 border shadow-2xl rounded-2xl flex flex-col ">
        <div className="flex flex-col items-center">
          <h3 className="mt-6 font-bold tracking-tight text-gray-500 text-2xl">
            Reset
          </h3>
        </div>
        <form className="p-7 mt-14" onSubmit={formik.handleSubmit}>
          <label
            htmlFor="password"
            className="block text-xs font-medium leading-6 text-gray-400"
          >
            {" "}
            Password
          </label>
          <input
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            id="password"
            name="password"
            className=" p-2 font-bold block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
          />
          <label
            htmlFor="repeated"
            className="block text-xs font-medium leading-6 text-gray-400"
          >
            {" "}
            Repeated password
          </label>
          <input
            type="password"
            id="repeated"
            name="repeated"
            className=" p-2 font-bold block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
          />

          <div>
            <button
              type="submit"
              className="flex mt-6 w-full justify-center rounded-md bg-indigo-600
                                 px-3 py-1.5 text-sm font-semibold leading-6 text-white
                                 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
                                  focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { userAuth } from "./store/store";
import { useEffect, useRef, useState } from "react";
import { generateOTP, verifyOTP } from "./helper/FetchHelper";

export const Recovery = () => {
  const email = userAuth((state) => state.auth.email);
  const [OTP, setOTP] = useState();
  const navigate = useNavigate();
  const effectOnce = useRef(false);
  useEffect(() => {
    if (effectOnce.current) return;
    effectOnce.current = true;
    generateOTP(email)
      .then((res) => {
        if (res) return toast.success("generated OTP successfully");
        return toast.error("OTP failed");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [email]);

  async function handleSubmit(e) {
    e.preventDefault();
    await verifyOTP(email, OTP)
      .then((res) => {
        if (res === 201) {
          toast.success("OTP is valid");
          navigate("/reset");
        }
      })
      .catch((e) => {
        toast.error("OTP failed");
      });
  }

  async function handleResend() {
    let promise = generateOTP(email);
    await toast.promise(promise, {
      loading: "sending...!",
      success: "OTP is sent",
      error: "Could Not Send OTP",
    });
  }

  return (
    <div className="flex flex-col h-screen w-screen items-center">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="h-[500px] mt-16 w-96 border shadow-2xl rounded-2xl flex flex-col ">
        <div className="flex flex-col items-center">
          <h3 className="mt-12 font-bold tracking-tight text-gray-500 text-2xl">
            Recovery
          </h3>
        </div>
        <form className="p-7 mt-20" onSubmit={handleSubmit}>
          <label
            htmlFor="OTP"
            className="block text-xs font-medium leading-6 text-gray-400 ml-8"
          >
            {" "}
            Enter 6 digital sent to your email address
          </label>
          <input
            value={OTP}
            onChange={(e) => setOTP(e.target.value)}
            type="text"
            id="OTP"
            name="OTP"
            className=" p-2 font-bold block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
          />
          <div>
            <button
              type="submit"
              className="flex mt-6 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Can't get OTP?
          <button
            onClick={handleResend}
            className="text-sky-500
            background-transparent
             px-1 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear hover:text-sky-200 transition-all duration-150"
            type="button"
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  );
};

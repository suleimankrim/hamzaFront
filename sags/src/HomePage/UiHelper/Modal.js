import { useFormik } from "formik";
import { usePostCourse } from "../hooks/usePost";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export const Modal = ({ setButtonC, edit }) => {
  const courseSave = usePostCourse();
  const formik = useFormik({
    initialValues: {
      title: "" || edit?.title,
      description: "" || edit?.description,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(edit?.title);
      if (edit?.title) {
        values["qurey"] = edit.title;
        courseSave.mutate(values);
        console.log("stage 1");
      } else courseSave.mutate(values);
    },
  });
  useEffect(() => {
    if (courseSave.isSuccess) {
      setButtonC((prev) => !prev);
    }
    if (courseSave.isError) {
      toast.error("could not save");
    }
  }, [courseSave.isSuccess]);

  return (
    <div className="w-screen h-screen fixed backdrop-blur z-40 flex justify-center items-center">
      {courseSave.isError ? <Toaster></Toaster> : null}
      <div className="w-3/5 h-3/5 bg-white mb-16 shadow-2xl border relative">
        <div className="flex justify-center mt-5">
          <h1 className="font-bold">Create Course</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="md:w-1/3 ml-4 mt-6">
            <label
              className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="title"
            >
              Title
            </label>
          </div>
          <div className="w-full px-2">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </div>
          <div className="w-full px-2 mt-6">
            <label
              className="block text-gray-500 font-bold mb-1 ml-2 pr-4"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 h-32"
              id="description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </div>
          <button
            className="rounded text-sky-50 bg-sky-500 w-14 h-7 hover:bg-sky-100 absolute bottom-4 right-4"
            type="submit"
          >
            Save
          </button>
        </form>
        <button
          onClick={() => setButtonC((prev) => !prev)}
          className="rounded text-sky-500 bg-sky-50 w-14 h-7 hover:bg-sky-500 absolute bottom-4 hover:text-sky-50 right-20"
        >
          Close
        </button>
      </div>
    </div>
  );
};

import { Card } from "./Card";
import { useFormik } from "formik";
import { usePost } from "./hooks/usePost";
import toast from "react-hot-toast";
import { useEffect, useRef, useState } from "react";
import { Modal } from "./UiHelper/Modal";

export const Home = () => {
  const [coursesData, setCoursesData] = useState([]);
  const [edit, setEdit] = useState();
  const [buttonC, setButtonC] = useState(false);
  const ref = useRef(false);
  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
    },
  });
  const courses = usePost();

  useEffect(() => {
    if (courses.data) {
      setCoursesData(courses.data);
    }
  }, [courses.data]);

  function removeCourse(courseTitle) {
    setCoursesData((prevCoursesData) =>
      prevCoursesData.filter((course) => course.title !== courseTitle)
    );
  }

  if (courses.error) return toast.error(courses.error.message);
  if (courses.isLoading) return toast.loading("Loading...");
  return (
    <div className="w-screen h-screen relative">
      {buttonC ? <Modal setButtonC={setButtonC} edit={edit} /> : null}
      <button
        onClick={() => {
          setButtonC(true);
          setEdit({
            title: "",
            description: "",
          });
        }}
        className="w-36 h-8 hover:bg-sky-100 text-sm rounded bg-sky-500 text-sky-50 absolute top-8 left-4"
      >
        Create Course
      </button>
      {coursesData.map((course) => (
        <Card
          course={course}
          key={course.id}
          removeCourse={removeCourse}
          setButtonC={setButtonC}
          setEdit={setEdit}
        />
      ))}
    </div>
  );
};

import { useNavigate } from "react-router-dom";

export const Card = ({ course, removeCourse, setButtonC, setEdit }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-100 w-full flex items-center justify-center font-sans">
        <div className="bg-white hover:shadow-2xl hover:animate- duration-1000 relative border rounded shadow p-6 m-4 h-[150px] lg:w-3/5 ">
          <div className="mb-4">
            <h1 className="text-grey-darkest text-2xl font-bold truncate">
              {course.title}
            </h1>
            <div className="flex ">
              <div className="mt-2">{course.description}</div>
              <button
                onClick={() => {
                  navigate("/table");
                }}
                className="truncate  p-2 absolute right-4 text-xs bg-sky-500 rounded text-sky-50 hover:bg-sky-200"
              >
                Select
              </button>
              <button
                onClick={() => {
                  setButtonC((prev) => !prev);
                  setEdit({
                    title: course.title,
                    description: course.description,
                  });
                }}
                className=" mr-1 p-2 absolute text-xs right-16 bg-sky-500 rounded text-sky-50 hover:bg-sky-200"
              >
                Edit
              </button>
              <button
                className="w-7 h-7 bg-sky-500
              text-sky-50 rounded-full hover:bg-sky-100 absolute top-[-7px] right-[-7px]"
                onClick={() => removeCourse(course.title)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

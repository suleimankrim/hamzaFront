import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const key = "post";
export const usePost = () => {
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      const { data } = await axios.get("https://sags-react-project3.onrender.com/courses");
      return data;
    },
  });
};
const axiosHelper = async (coordinate) => {
  console.log(coordinate.qurey);
  if (!coordinate.qurey)
    return await axios.post("https://sags-react-project3.onrender.com/courses", coordinate);
  console.log("stage 2");
  return await axios.put(
    "https://sags-react-project3.onrender.com/courses/title/" + coordinate.qurey,
    coordinate
  );
};
export const usePostCourse = () => {
  const queryClient = useQueryClient();
  return useMutation(axiosHelper, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(key);
    },
  });
};

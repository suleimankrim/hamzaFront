import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const key = "post";
export const usePost = () => {
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      const { data } = await axios.get("http://127.0.0.1:8080/courses");
      return data;
    },
  });
};
const axiosHelper = async (coordinate) => {
  console.log(coordinate.qurey);
  if (!coordinate.qurey)
    return await axios.post("http://127.0.0.1:8080/courses", coordinate);
  console.log("stage 2");
  return await axios.put(
    "http://127.0.0.1:8080/courses/title/" + coordinate.qurey,
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

import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
export default function useFetch(query) {
  const [getData, setData] = useState({
    apiData: null,
    status: null,
    isLoading: null,
    serverError: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;
      try {
        setData((prevState) => ({
          ...prevState,
          isLoading: true,
        }));
        const { data, status } = await axios.get(
          `http://127.0.0.1:8080${query}`
        );
        if (status === 201) {
          setData((prevState) => ({
            ...prevState,
            isLoading: false,
            apiData: data,
            status: status,
          }));
        }
      } catch (e) {
        setData((prevState) => ({
          ...prevState,
          isLoading: false,
          status: 404,
          serverError: e.message,
        }));
      }
    };

    fetchData();
  }, [query]);
  return [getData, setData];
}

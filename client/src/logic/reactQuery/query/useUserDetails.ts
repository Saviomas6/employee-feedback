import { useQuery } from "react-query";
import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosInterceptor";

const getUserDetail = async () => {
  const { data } = await axiosInstance.get(`${apiEndPoints?.userDetails}`);
  return data;
};

export const useGetUserDetail = () => {
  const { data, isError, isFetching, isLoading } = useQuery(
    "userDetails",
    getUserDetail,
    {
      refetchOnWindowFocus: false,
    }
  );
  return { data, isError, isFetching, isLoading };
};

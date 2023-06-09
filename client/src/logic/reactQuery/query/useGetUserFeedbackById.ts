import { useQuery } from "react-query";
import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosInterceptor";
interface I_Props {
  _id: string;
  name: string;
  department: string;
  comments: string;
  review: string;
}
const getUserFeedbackById = async (id: string | undefined) => {
  const { data } = await axiosInstance.get(
    `${apiEndPoints?.userFeedbackById}${id}`
  );
  return data;
};

export const useGetUserFeedbackById = (id: string | undefined) => {
  const { data, isError, isFetching, isLoading } = useQuery<I_Props[]>(
    ["userFeedbackById", id],
    () => getUserFeedbackById(id),
    {
      refetchOnWindowFocus: false,
    }
  );
  return { data, isError, isFetching, isLoading };
};

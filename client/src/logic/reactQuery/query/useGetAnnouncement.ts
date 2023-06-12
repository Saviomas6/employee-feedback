import { useQuery } from "react-query";
import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosInterceptor";
interface I_Props {
  announcementHeading: string;
  announcementHeadingValue: string;
  announcementDescription: string;
  announcementSummary: string;
  _id: string;
}
const getUserAnnouncement = async () => {
  const { data } = await axiosInstance.get(`${apiEndPoints?.userAnnouncement}`);
  return data;
};

export const useGetUserAnnouncement = () => {
  const { data, isError, isFetching, isLoading } = useQuery<I_Props[]>(
    "getUserAnnouncement",
    getUserAnnouncement,
    {
      refetchOnWindowFocus: false,
    }
  );
  return { data, isError, isFetching, isLoading };
};

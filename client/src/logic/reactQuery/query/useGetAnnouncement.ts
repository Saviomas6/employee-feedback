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
const getUserAnnouncement = async (search: string) => {
  const { data } = await axiosInstance.get(
    `${apiEndPoints?.userAnnouncement}?search=${search}`
  );
  return data;
};

export const useGetUserAnnouncement = (search: string) => {
  const { data, isError, isFetching, isLoading } = useQuery<I_Props[]>(
    ["getUserAnnouncement", search],
    () => getUserAnnouncement(search),
    {
      refetchOnWindowFocus: false,
    }
  );
  return { data, isError, isFetching, isLoading };
};

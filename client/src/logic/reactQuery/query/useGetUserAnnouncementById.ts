import { useQuery } from "react-query";
import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosInterceptor";
interface I_Props {
  _id: string;
  announcementHeading: string;
  announcementHeadingValue: string;
  announcementDescription: string;
  announcementSummary: string;
}
const getUserAnnouncementById = async (id: string | undefined) => {
  const { data } = await axiosInstance.get(
    `${apiEndPoints?.userAnnouncement}/${id}`
  );
  return data;
};

export const useGetUserAnnouncementById = (id: string | undefined) => {
  const { data, isError, isFetching, isLoading } = useQuery<I_Props[]>(
    ["userAnnouncementById", id],
    () => getUserAnnouncementById(id),
    {
      refetchOnWindowFocus: false,
    }
  );
  return { data, isError, isFetching, isLoading };
};

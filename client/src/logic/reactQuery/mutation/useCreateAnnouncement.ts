import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosInterceptor";
import { useMutation, useQueryClient } from "react-query";
interface I_Props {
  announcementHeading: string;
  announcementHeadingValue: string;
  announcementDescription: string;
  announcementSummary: string;
}
const createAnnouncement = (options: I_Props) => {
  const url = apiEndPoints?.userAnnouncement;
  return axiosInstance.post(url, options);
};

export const useCreateAnnouncementMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(createAnnouncement, {
    onSuccess: (_data) => {
      queryClient.invalidateQueries("getUserAnnouncement");
    },
  });
};

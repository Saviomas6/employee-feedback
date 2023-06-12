import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosInterceptor";
import { useMutation, useQueryClient } from "react-query";
interface I_Values {
  _id: string;
  announcementHeading: string;
  announcementHeadingValue: string;
  announcementDescription: string;
  announcementSummary: string;
}

const editAnnouncement = (options: I_Values) => {
  const url = apiEndPoints?.userAnnouncement;
  return axiosInstance.put(url, options);
};

export const useEditAnnouncement = () => {
  const queryClient = useQueryClient();
  return useMutation(editAnnouncement, {
    onSuccess: (_data) => {
      queryClient.invalidateQueries("getUserAnnouncement");
    },
  });
};

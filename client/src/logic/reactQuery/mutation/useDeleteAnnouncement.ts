import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosInterceptor";
import { useMutation, useQueryClient } from "react-query";

const deleteAnnouncement = (option: any) => {
  const url = `${apiEndPoints?.userAnnouncement}/${option?.id}`;
  return axiosInstance.delete(url);
};

export const useDeleteAnnouncement = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteAnnouncement, {
    onSuccess: (_data) => {
      queryClient.invalidateQueries("getUserAnnouncement");
    },
  });
};

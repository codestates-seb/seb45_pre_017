import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const useDeleteQuestion = (userID: number, postID: string) => {
  const queryClient = useQueryClient();

  const deleteQuestion = useMutation(
    () => deleteData(userID, postID),

    {
      onSuccess: () => {
        queryClient.invalidateQueries(
          `Question-userID:${userID}-postID:${postID}`,
        );
      },
    },
  );

  return deleteQuestion;
};

export default useDeleteQuestion;

// useMutation 콜백 함수
const deleteData = async (userID: number, postID: string) => {
  const response = await axios.delete(
    `http://3.34.199.73:8080/${userID}/posts/${postID}`,
  );
  return response;
};

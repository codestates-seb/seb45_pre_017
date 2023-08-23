import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const useDeleteAnswer = (userID: number, postID: string, answerID: number) => {
  const queryClient = useQueryClient();

  const deleteAnswer = useMutation(
    () => deleteData(userID, postID, answerID),

    {
      onSuccess: () => {
        queryClient.invalidateQueries(
          `Answer-userID:${userID}-postID:${postID}`,
        );
      },
    },
  );

  return deleteAnswer;
};

export default useDeleteAnswer;

// useMutation 콜백 함수
const deleteData = async (userID: number, postID: string, answerID: number) => {
  const response = await axios.delete(
    `http://3.34.199.73:8080/${userID}/posts/${postID}/answers/${answerID}`,
  );
  return response;
};

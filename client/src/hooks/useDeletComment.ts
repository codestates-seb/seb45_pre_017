import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const useDleteComment = (
  userID: string,
  answerID: number,
  commentID: number,
) => {
  const queryClient = useQueryClient();

  const deleteComment = useMutation(
    () => deleteData(userID, answerID, commentID),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(
          `Comment-userID:${userID}-answerID:${answerID}`,
        );
      },
    },
  );

  return deleteComment;
};

export default useDleteComment;

// useMutation 콜백 함수
const deleteData = async (
  userID: string,
  answerID: number,
  commentID: number,
) => {
  const response = await axios.delete(
    `http://3.34.199.73:8080/${userID}/${answerID}/comments/${commentID}`,
  );
  return response;
};

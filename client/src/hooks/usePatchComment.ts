import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const usePatchComment = (
  userID: string,
  answerID: number,
  commentID: number,
) => {
  const queryClient = useQueryClient();

  const patchComment = useMutation(
    (data: Data) => postData(userID, answerID, commentID, data),

    {
      onSuccess: () => {
        queryClient.invalidateQueries(
          `Comment-userID:${userID}-answerID:${answerID}`,
        );
      },
    },
  );

  return patchComment;
};

export default usePatchComment;

// useMutation 콜백 함수
const postData = async (
  userID: string,
  answerID: number,
  commentID: number,
  data: Data,
) => {
  const response = await axios.patch(
    `http://3.34.199.73:8080/${userID}/${answerID}/comments/${commentID}`,
    data,
    options,
  );
  return response;
};

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

interface Data {
  content: string;
}

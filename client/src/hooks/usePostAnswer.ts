import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const usePostAnswer = (userID: string, postID: string) => {
  const queryClient = useQueryClient();

  const postAnswer = useMutation(
    (data: Data) => postData(userID, postID, data),

    {
      onSuccess: () => {
        queryClient.invalidateQueries(
          `Answer-userID:${userID}-postID:${postID}`,
        );
      },
    },
  );

  return postAnswer;
};

export default usePostAnswer;

// useMutation 콜백 함수
const postData = async (userID: string, postID: string, data: Data) => {
  const response = await axios.post(
    `http://3.34.199.73:8080/${userID}/posts/${postID}/answers`,
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
  answerBody: string;
}

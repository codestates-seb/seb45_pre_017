import { useQuery } from "react-query";
import axios from "axios";

const useGetAnswer = (userID: string, postID: string) => {
  const { data, isLoading, error } = useQuery(
    `Answer-userID:${userID}-postID:${postID}`,
    () => getAnswerFromServer(userID, postID),
  );

  return { answerData: data, answerLoad: isLoading, answerError: error };
};

// useQuery에 활용될 콜백함수
async function getAnswerFromServer(userID: string, postID: string) {
  const response = await axios(
    `http://3.34.199.73:8080/${userID}/posts/${postID}/answers`,
  );
  return response.data;
}

export default useGetAnswer;

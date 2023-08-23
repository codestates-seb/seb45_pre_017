import { useQuery } from "react-query";
import axios from "axios";

const useGetQuestion = (userID: string, postID: string) => {
  const { data, isLoading, error } = useQuery(
    `Question-userID:${userID}-postID:${postID}`,
    () => getQuestionFromServer(userID, postID),
  );

  return { questionData: data, questionLoad: isLoading, questionError: error };
};

// useQuery에 활용될 콜백함수
async function getQuestionFromServer(userID: string, postID: string) {
  const response = await axios(
    `http://3.34.199.73:8080/${userID}/posts/${postID}`,
  );
  return response.data;
}

export default useGetQuestion;

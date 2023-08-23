import { useQuery } from "react-query";
import axios from "axios";

const useGetComment = (userID: string, answerID: number) => {
  const { data, isLoading, error } = useQuery(
    `Comment-userID:${userID}-answerID:${answerID}`,
    () => getCommentFromServer(userID, answerID),
  );

  return { commentData: data, commentLoad: isLoading, commentError: error };
};

// useQuery에 활용될 콜백함수
async function getCommentFromServer(userID: string, answerID: number) {
  const response = await axios(
    `http://3.34.199.73:8080/${userID}/${answerID}/comments`,
  );
  return response.data;
}

export default useGetComment;

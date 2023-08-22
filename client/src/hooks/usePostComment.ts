import { useMutation } from "react-query";
import axios from "axios";

const usePostComment = (userID: string, postID: string) => {
  // 전달인자 수정해야 함
  const postComment = useMutation((data: Data) =>
    postData(userID, postID, data),
  );

  return postComment;
};

export default usePostComment;

// useMutation 콜백 함수
const postData = async (userID: string, answerID: string, data: Data) => {
  const response = await axios.post(
    `http://3.34.199.73:8080/${userID}/${answerID}/comments`,
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

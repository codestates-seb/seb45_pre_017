import { useMutation } from "react-query";
import axios from "axios";

const usePostAnswer = (parameter: string, value: string) => {
  // 전달인자 수정해야 함
  const postAnswer = useMutation((data: any) =>
    postData(parameter, value, data),
  );

  return postAnswer;
};

export default usePostAnswer;

// useMutation 콜백 함수
const postData = async (parameter: string, value: string, data: any) => {
  const response = axios.post(
    `http://localhost:3001/page?${parameter}=${value}`,
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

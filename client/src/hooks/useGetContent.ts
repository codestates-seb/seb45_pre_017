import { useQuery } from "react-query";
import axios from "axios";

const useGetContent = (parameter: string, value: string) => {
  const { data, isLoading, error } = useQuery(value, () =>
    getQuestionContentFromServer(parameter, value),
  );

  return { data, isLoading, error };
};

// useQuery에 활용될 콜백함수
async function getQuestionContentFromServer(parameter: string, value: string) {
  const response = await axios(
    `http://localhost:3001/page?${parameter}=${value}`,
  );
  return response.data;
}

export default useGetContent;

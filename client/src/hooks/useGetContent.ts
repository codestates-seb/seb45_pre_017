import { useQuery } from "react-query";
import axios from "axios";

const useGetContent = (parameter: string) => {
  const { data, isLoading, error } = useQuery([parameter, parameter], () =>
    getQuestionContentFromServer(parameter),
  );

  return { data, isLoading, error };
};

// useQuery에 활용될 콜백함수 -> 쿼리 파라미터 부분 수정 필요
async function getQuestionContentFromServer(parameter: string) {
  const response = await axios(`http://localhost:3001/page?votes=${parameter}`);
  return response.data;
}

export default useGetContent;

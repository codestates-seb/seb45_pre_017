import axios, { AxiosError } from "axios";

export const registerUser = async (displayName, email, password) => {
  try {
    const response = await axios.post(
      "http://3.34.199.73:8080/users/register",
      {
        userName: displayName,
        userEmail: email,
        userPw: password,
      },
    );

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<any>;
    if (
      axiosError.response &&
      axiosError.response.data &&
      axiosError.response.data.error
    ) {
      throw axiosError.response.data.error;
    } else {
      throw "An unknown error occurred";
    }
  }
};

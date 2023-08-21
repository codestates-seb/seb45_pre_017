import axios from "axios";

const login = async (email: string, password: string): Promise<boolean> => {
  try {
    const response = await axios.post("/user/login", {
      userEmail: email,
      userPw: password,
    });

    const jwtToken = response.data.jwt_token;
    localStorage.setItem("jwtToken", jwtToken);

    return true; // 로그인 성공
  } catch (error) {
    return false; // 로그인 실패
  }
};

export { login };

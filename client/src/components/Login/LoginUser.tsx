// LoginUser.tsx
import axios from "axios";

const login = async (
  email: string,
  password: string,
): Promise<string | null> => {
  try {
    const response = await axios.post("/user/login", {
      userEmail: email,
      userPw: password,
    });

    const jwtToken = response.data.jwt_token;
    localStorage.setItem("jwtToken", jwtToken);

    return jwtToken; // 로그인 성공 시 JWT 토큰 반환
  } catch (error) {
    return null; // 로그인 실패 시
  }
};

export { login };

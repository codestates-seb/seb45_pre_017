import jwtDecode from "jsonwebtoken";

const isTokenValid = (token: string): boolean => {
  try {
    const decodedToken = jwtDecode(token) as { exp: number };
    const currentTime = Date.now() / 1000;
    return decodedToken.exp >= currentTime;
  } catch (error) {
    return false;
  }
};

export { isTokenValid };

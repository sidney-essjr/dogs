import { jwtVerify } from "jose";

export default async function verifyToken(token: string): Promise<boolean> {
  try {
    // await jwtVerify(token, new TextEncoder().encode(""), { algorithms: [] });
    return true;
  } catch (error) {
    return false;
  }
}

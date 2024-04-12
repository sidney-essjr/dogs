"use server";

import { TOKEN_VALIDATE_POST, USER_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

export type User = {
  id: number;
  email: string;
  username: string;
  nome: string;
};

export default async function validarToken() {
  const { url } = TOKEN_VALIDATE_POST();

  const token = cookies().get("token")?.value;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) throw new Error("Erro ao validar token");

    const data = (await response.json()) as User;

    return { ok: true, data: data, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}

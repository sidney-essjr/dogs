"use server";

import { TOKEN_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

export default async function validarAcesso(state: {}, formData: FormData) {
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;

  const { url } = TOKEN_POST();

  try {
    if (!username || !password)
      throw new Error("Preencha os campos com seus dados de acesso");

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Usuário ou senha inválidos");

    const data = await response.json();

    cookies().set("token", data.token, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24,
    });

    return { ok: true, data: null, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}

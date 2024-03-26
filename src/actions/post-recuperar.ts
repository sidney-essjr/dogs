"use server";

import { PASSWORD_LOST } from "@/functions/api";
import apiError from "@/functions/api-error";

export default async function postRecuperar(state: {}, formData: FormData) {
  const login = formData.get("login") as string | null;
  const urlRecuperar = formData.get("url") as string | null;

  const { url } = PASSWORD_LOST();

  try {
    if (!login) throw new Error("Preencha os campos com seus dados de acesso");

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login,
        url: urlRecuperar,
      }),
    });

    if (!response.ok) throw new Error("Email ou usuário não cadastrados");

    return { ok: true, data: null, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}

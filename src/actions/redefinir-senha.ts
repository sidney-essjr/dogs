"use server";

import { PASSWORD_LOST, PASSWORD_RESET } from "@/functions/api";
import apiError from "@/functions/api-error";

export default async function redefinirSenha(state: {}, formData: FormData) {
  const login = formData.get("login") as string | null;
  const key = formData.get("key") as string | null;
  const password = formData.get("password") as string | null;

  const { url } = PASSWORD_RESET();

  try {
    if (!password) throw new Error("Preencha os campos necessários");

    if (!login || !key) throw new Error("Não autorizado!");

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Não autorizado!");

    return { ok: true, data: null, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}

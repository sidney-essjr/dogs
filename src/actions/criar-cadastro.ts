"use server";

import { USER_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import postAcesso from "./validar-acesso";

export default async function criarCadastro(state: {}, formData: FormData) {
  const username = formData.get("username") as string | null;
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  const { url } = USER_POST();

  try {
    if (!username || !email || !password)
      throw new Error("Preencha os campos com seus dados de acesso");
    if (password.length <= 6)
      throw new Error("A senha precisa conter mais de 6 caracteres");
    if (username.length < 3)
      throw new Error("O nome precisa conter 3 ou mais caracteres");

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Email ou usuário ja cadastrados");

    const { ok } = await postAcesso({ ok: true, error: "" }, formData);

    if (!ok) throw new Error("Erro na tentativa de acesso");

    return { ok: true, data: null, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}

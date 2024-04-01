"use server";

import { USER_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

type User = {
  id: number;
  email: string;
  username: string;
  nome: string;
};

export default async function obterUsuario() {
  const { url } = USER_GET();

  const token = cookies().get("token")?.value;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) throw new Error("Erro ao tentar acessar usuário");

    const data = (await response.json()) as User;

    return { ok: true, data: data, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}

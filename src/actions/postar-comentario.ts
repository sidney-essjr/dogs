"use server";

import { COMMENT_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { Comentario } from "./obter-foto";

export default async function postarComentario(state: {}, formData: FormData) {
  const token = cookies().get("token")?.value;
  const comment = (formData.get("comment") as string) || null;
  const id = (formData.get("id") as string) || null;

  const { url } = COMMENT_POST(id);

  try {
    if (!comment || !id) {
      throw new Error("Preencha os campos necessários");
    }

    if (!token) {
      throw new Error("Para comentar é necessário estar logado");
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });

    if (!response.ok) throw new Error("Falha ao enviar comentario");

    console.log(response)

    const data = (await response.json()) as Comentario;

    revalidateTag("comentario");
    return { ok: true, data: data, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}

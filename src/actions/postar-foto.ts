"use server";

import { PHOTO_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function postarFoto(state: {}, formData: FormData) {
  const token = cookies().get("token")?.value;
  const nome = formData.get("nome") as string | null;
  const idade = formData.get("idade") as string | null;
  const peso = formData.get("peso") as string | null;
  const img = formData.get("img") as File;

  const { url } = PHOTO_POST();

  try {
    if (!nome || !peso || !idade || img.size === 0) {
      throw new Error("Preencha os campos necessários");
    }

    if (!token) {
      throw new Error("Token de acesso inexistente");
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });

    if (!response.ok) throw new Error("Email ou usuário ja cadastrados");
  } catch (error: unknown) {
    return apiError(error);
  }

  revalidateTag("fotos");
  redirect("/conta");
}

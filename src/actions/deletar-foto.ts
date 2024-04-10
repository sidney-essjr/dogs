"use server";

import { PHOTO_DELETE, PHOTO_POST, PHOTOS_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function deletarFoto(id: string) {
  const token = cookies().get("token")?.value;

  const { url } = PHOTO_DELETE(id);

  try {
    if (!token) {
      throw new Error("Token de acesso inexistente");
    }

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) throw new Error("Erro ao deletar a foto");
  } catch (error: unknown) {
    return apiError(error);
  }

  revalidateTag("fotos");
  redirect("/conta");
}

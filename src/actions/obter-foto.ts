"use server";

import { PHOTO_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { Foto } from "./obter-fotos";

export type Comentario = {
  comment_ID: string;
  comment_post_ID: string;
  comment_author: string;
  comment_content: string;
};

export type FotoData = {
  photo: Foto;
  comments: Comentario[];
};

export async function obterFoto(id: string) {
  try {
    const { url } = PHOTO_GET(id);

    const response = await fetch(url, {
      next: {
        revalidate: 60,
        tags: ["fotos, comentario"],
      },
    });

    
    if (!response.ok)
        throw new Error("Não foi possivel acessar os dados na api");
    
    const data = (await response.json()) as FotoData;

    return { data: data, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}

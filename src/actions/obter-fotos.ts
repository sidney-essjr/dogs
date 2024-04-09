"use server";

import { PHOTOS_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { error } from "console";

export interface Foto {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  peso: string;
  idade: string;
  acessos: string;
  total_comments: string;
}

type ObterFotoParams = {
  page?: number;
  total?: number;
  user?: 0 | string;
};

export async function obterFotos(
  { page = 1, total = 6, user = 0 }: ObterFotoParams = {},
  optionsFront?: RequestInit
) {
  try {
    const options = optionsFront || {
      next: { revalidate: 20, tags: ["fotos"] },
    };
    const { url } = PHOTOS_GET({ page, total, user });

    const response = await fetch(url, options);

    if (!response.ok)
      throw new Error("Não foi possivel acessar os dados na api");

    const fotos = (await response.json()) as Foto[];

    return { data: fotos, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}

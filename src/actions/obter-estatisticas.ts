"use server";

import { STATS_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

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

export type Estatisticas = {
  id: number;
  title: string;
  acessos: string;
};

export async function obterEstatisticas() {
  try {
    const token = cookies().get("token")?.value;

    if (!token) throw new Error("Acesso negado!");

    const { url } = STATS_GET();

    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
      next: {
        revalidate: 5,
      },
    });

    if (!response.ok)
      throw new Error("Não foi possivel acessar os dados na api");

    const data = (await response.json()) as Estatisticas[];

    return { data, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}

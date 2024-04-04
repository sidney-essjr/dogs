"use server";

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

export async function obterFotos() {
  const response = await fetch(
    "https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=6&_user=0",
    { next: { revalidate: 20, tags:['fotos'] } }
  );

  if (!response.ok) throw new Error("Não foi possivel acessar os dados na api");

  const data = (await response.json()) as Foto[];

  return data;
}

"use server";

import { obterFoto } from "@/actions/obter-foto";
import FeedModal from "@/app/_componentes/feed/feed-modal";
import { notFound } from "next/navigation";

interface Parametros {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Parametros) {
  const { data } = await obterFoto(params.id);
  if (!data) return { title: "Fotos" };

  return {
    title: data.photo.title,
  };
}

export default async function FotoIdPage({ params }: Parametros) {
  const { data } = await obterFoto(params.id);
  if (!data) return notFound();
  return <FeedModal foto={data} />;
}

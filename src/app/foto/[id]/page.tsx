"use server";

import { obterFoto } from "@/actions/obter-foto";
import { notFound } from "next/navigation";
import FotoConteudo from "../_componentes/foto-conteudo";
import { title } from "process";

interface Parametros {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Parametros) {
  const { data } = await obterFoto(params.id);
  if(!data) return {title: 'Fotos'}

  return {
    title: data.photo.title
  }
  
}

export default async function FotoIdPage({ params }: Parametros) {
  const { data } = await obterFoto(params.id);
  if (!data) return notFound();
  return (
    <section className="container mainContainer">
      <FotoConteudo data={data} single={true} />
    </section>
  );
}

"use server";

import { obterFotos } from "@/actions/obter-fotos";
import Feed from "./_componentes/feed/feed";

export default async function Home() {
  const fotos = await obterFotos();

  return (
    <section className="container mainContainer">
      <Feed fotos={fotos} />
    </section>
  );
}

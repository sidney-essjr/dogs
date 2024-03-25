"use server";

import { getFotos } from "@/actions/get-fotos";
import Feed from "./_componentes/feed/feed";

export default async function Home() {
  const fotos = await getFotos();

  return (
    <section className="container mainContainer">
      <Feed fotos={fotos}/>
    </section>
  );
}

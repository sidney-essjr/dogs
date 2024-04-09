"use server";

import { obterFotos } from "@/actions/obter-fotos";
import Feed from "./_componentes/feed/feed";

export default async function Home() {
  const { data: fotos } = await obterFotos();

  return (
    <section className="container mainContainer">
      {fotos?.length ? (
        <Feed fotos={fotos} />
      ) : (
        <div>
          <p
            style={{ color: "#444", fontSize: "1.25rem", marginBottom: "1rem" }}
          >
            Nenhuma foto localizada.
          </p>
        </div>
      )}
    </section>
  );
}

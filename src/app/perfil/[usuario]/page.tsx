import { obterFotos } from "@/actions/obter-fotos";
import Feed from "@/app/_componentes/feed/feed";

interface Parametros {
  params: {
    usuario: string;
  };
}

export default async function PerfilUsuarioPage({ params }: Parametros) {
  const { data } = await obterFotos({ user: params.usuario });

  if (!data) return null;

  return (
    <section className="container mainSection">
      <h1 className="title">{params.usuario}</h1>
      <Feed fotos={data} user={params.usuario} />
    </section>
  );
}

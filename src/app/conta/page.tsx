import { obterFotos } from "@/actions/obter-fotos";
import obterUsuario from "@/actions/obter-usuario";
import { Metadata } from "next";
import Feed from "../_componentes/feed/feed";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Minha Conta",
};

export default async function ContaPage() {
  const { data: user } = await obterUsuario();
  const { data } = await obterFotos({ user: user?.username });

  return (
    <section>
      {data?.length ? (
        <Feed fotos={data} />
      ) : (
        <div>
          <p
            style={{ color: "#444", fontSize: "1.25rem", marginBottom: "1rem" }}
          >
            Seu usuário não possui fotos cadastradas.
          </p>
          <Link
            href={"/conta/postar"}
            className="button"
            style={{ display: "inline-block" }}
          >
            Postar Foto
          </Link>
        </div>
      )}
    </section>
  );
}

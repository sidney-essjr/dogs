import { obterEstatisticas } from "@/actions/obter-estatisticas";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const ContaEstatisticas = dynamic(
  () => import("../_componentes/conta-estatisticas"),
  {
    loading: () => <p>Carregando...</p>,
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "Estatísticas | Minha Conta",
};

export default async function EstatisticasPage() {
  const { data } = await obterEstatisticas();

  if (!data) return;

  return (
    <section>
      <ContaEstatisticas data={data} />
    </section>
  );
}

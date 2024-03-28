import RedefinirForm from "../_componentes/redefinir-form";

export default function RedefinirPage({
  searchParams,
}: {
  searchParams: {
    key: string;
    login: string;
  };
}) {
  return (
    <section className="animeLeft">
      <h1 className="title">Redefinir Senha</h1>
      <RedefinirForm keyToken={searchParams.key} login={searchParams.login} />
    </section>
  );
}

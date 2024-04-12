import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container">
      <h1 className="title">Página não encontrada</h1>
      <Link
        href="/"
        className="button"
        style={{ marginBottom: "1rem", display: "inline-block" }}
      >
        Volte para a Home.
      </Link>
    </section>
  );
}

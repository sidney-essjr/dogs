import { Metadata } from "next";
import PostarFoto from "../_componentes/postar-foto";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Postar | Minha Conta",
};

export default function PostarPage() {
  return (
    <section>
      <PostarFoto />
    </section>
  );
}

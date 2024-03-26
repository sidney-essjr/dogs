import { Metadata } from "next";
import RecuperarForm from "../_componentes/recuperar-form";

export const metadata: Metadata = {
  title: "Perdeu a senha | Dogs",
  description: "Recupere sua senha",
};

export default function RecuperarPage() {
  return (
    <section className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>
      <RecuperarForm />
    </section>
  );
}

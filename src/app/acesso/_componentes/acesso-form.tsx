"use client";

import { getFotos } from "@/actions/get-fotos";
import Button from "@/app/_componentes/forms/button";
import { useFormState, useFormStatus } from "react-dom";

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Carregando...</Button>
      ) : (
        <Button>Entrar</Button>
      )}
    </>
  );
};

export default function AcessoForm() {
// const [state, action] = useFormState(getFotos, );

  return (
    <>
      <form action={getFotos}>
        <input type="text" name="username" placeholder="usuário" />
        <input type="password" name="password" placeholder="senha" />

        <FormButton />
      </form>
    </>
  );
}

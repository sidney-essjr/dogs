"use client";

import { getFotos } from "@/actions/get-fotos";
import PostAcesso from "@/actions/post-acesso";
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
  const [state, action] = useFormState(PostAcesso, {
    ok: false,
    data: null,
    error: "",
  });

  return (
    <>
      <form action={action}>
        <input type="text" name="username" placeholder="usuário" />
        <input type="password" name="password" placeholder="senha" />

        <FormButton />
        <p>{state.error}</p>
      </form>
    </>
  );
}

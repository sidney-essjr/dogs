"use client";

import PostAcesso from "@/actions/post-acesso";
import Button from "@/app/_componentes/forms/button";
import Input from "@/app/_componentes/forms/input";
import ErrorMessage from "@/app/_componentes/helper/error-message";
import { useEffect } from "react";
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

  useEffect(() => {
    if (state.ok) window.location.href = "/conta";
  }, [state.ok]);

  return (
    <>
      <form action={action}>
        <Input name="username" label="Usuário" />
        <Input name="password" label="Senha" type="password" />

        <ErrorMessage error={state.error} />

        <FormButton />
      </form>
    </>
  );
}

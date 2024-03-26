"use client";

import postCadastrar from "@/actions/post-cadastrar";
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
        <Button disabled>Cadastrando...</Button>
      ) : (
        <Button>Cadastrar</Button>
      )}
    </>
  );
};

export default function CadastrarForm() {
  const [state, action] = useFormState(postCadastrar, {
    ok: false,
    data: null,
    error: "",
  });

  useEffect(() => {
    if (state.ok) window.location.href = "/conta";
  }, [state.ok]);

  return (
    <div>
      <form action={action}>
        <Input label="Nome" name="username" />
        <Input label="E-mail" name="email" type="email" />
        <Input label="Senha" name="password" type="password" />

        <ErrorMessage error={state.error} />

        <FormButton />
      </form>
    </div>
  );
}

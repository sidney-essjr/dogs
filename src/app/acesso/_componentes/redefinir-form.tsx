"use client";

import recuperarAcesso from "@/actions/recuperar-acesso";
import redefinirSenha from "@/actions/redefinir-senha";
import Button from "@/app/_componentes/forms/button";
import Input from "@/app/_componentes/forms/input";
import ErrorMessage from "@/app/_componentes/helper/error-message";
import { useFormState, useFormStatus } from "react-dom";

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled>Enviando...</Button>
      ) : (
        <Button>Enviar</Button>
      )}
    </>
  );
};

export default function RedefinirForm({
  login,
  keyToken,
}: {
  login: string;
  keyToken: string;
}) {
  const [state, action] = useFormState(redefinirSenha, {
    ok: false,
    data: null,
    error: "",
  });

  return (
    <div>
      <form action={action}>
        <Input label="Nova senha" name="password" />
        <input type="hidden" name="key" value={keyToken} />
        <input type="hidden" name="login" value={login} />
        <ErrorMessage error={state.error} />
        {state.ok ? (
          <p style={{ color: "#4c1" }}>Senha redefinida!</p>
        ) : (
          <FormButton />
        )}
      </form>
    </div>
  );
}

"use client";

import postRecuperar from "@/actions/post-recuperar";
import Button from "@/app/_componentes/forms/button";
import Input from "@/app/_componentes/forms/input";
import ErrorMessage from "@/app/_componentes/helper/error-message";
import { useEffect, useState } from "react";
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

export default function RecuperarForm() {
  const [url, setUrl] = useState("");
  const [state, action] = useFormState(postRecuperar, {
    ok: false,
    data: null,
    error: "",
  });

  useEffect(() => {
    setUrl(window.location.href.replace("recuperar", "redefinir"));
  }, []);

  return (
    <div>
      <form action={action}>
        <Input label="Email / Usuário" name="login" />
        <input type="hidden" name="url" value={url} />
        <ErrorMessage error={""} />

        {state.ok ? (
          <p style={{ color: "#4c1" }}>Email enviado!</p>
        ) : (
          <FormButton />
        )}
      </form>
    </div>
  );
}

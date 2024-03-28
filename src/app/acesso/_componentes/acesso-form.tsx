"use client";

import validarAcesso from "@/actions/validar-acesso";
import Button from "@/app/_componentes/forms/button";
import Input from "@/app/_componentes/forms/input";
import ErrorMessage from "@/app/_componentes/helper/error-message";
import Link from "next/link";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import styles from "./acesso-form.module.css";

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled>Carregando...</Button>
      ) : (
        <Button>Entrar</Button>
      )}
    </>
  );
};

export default function AcessoForm() {
  const [state, action] = useFormState(validarAcesso, {
    ok: false,
    data: null,
    error: "",
  });

  useEffect(() => {
    if (state.ok) window.location.href = "/conta";
  }, [state.ok]);

  return (
    <>
      <form className={styles.form} action={action}>
        <Input name="username" label="Usuário" />
        <Input name="password" label="Senha" type="password" />

        <ErrorMessage error={state.error} />

        <FormButton />
      </form>
      <Link className={styles.perdeu} href="/acesso/recuperar">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta, cadastre-se no site</p>
        <Link className="button" href="/acesso/cadastrar">
          Cadastro
        </Link>
      </div>
    </>
  );
}

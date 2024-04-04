"use client";

import criarCadastro from "@/actions/criar-cadastro";
import Button from "@/app/_componentes/forms/button";
import Input from "@/app/_componentes/forms/input";
import ErrorMessage from "@/app/_componentes/helper/error-message";
import { ChangeEvent, useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import styles from "./postar-foto.module.css";
import postarFoto from "@/actions/postar-foto";

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

export default function PostarFoto() {
  const [img, setImg] = useState("");
  const [state, action] = useFormState(postarFoto, {
    ok: false,
    data: null,
    error: "",
  });

  useEffect(() => {
    if (state.ok) window.location.href = "/conta";
  }, [state.ok]);

  function handleImgChange({ target }: ChangeEvent<HTMLInputElement>) {
    if (target.files) {
      setImg(URL.createObjectURL(target.files[0]));
    }
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form action={action}>
        <Input label="Nome" name="nome" />
        <Input label="Peso" name="peso" type="number" />
        <Input label="Idade" name="idade" type="number" />
        <input
          onChange={handleImgChange}
          className={styles.file}
          type="file"
          name="img"
        />

        <ErrorMessage error={state.error} />

        <FormButton />
      </form>
      <div>
        <div
          className={styles.preview}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
    </section>
  );
}

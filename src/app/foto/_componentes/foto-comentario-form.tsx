"use client";

import { Comentario } from "@/actions/obter-foto";
import postarComentario from "@/actions/postar-comentario";
import ErrorMessage from "@/helper/error-message";
import EnviarIcon from "@/icons/enviar-icon";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import styles from "./foto-comentario-form.module.css";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <button className={styles.button} disabled={pending}>
      <EnviarIcon />
    </button>
  );
}

export default function FotoComentarioForm({
  id,
  setComments,
  single,
}: {
  id: number;
  setComments: Dispatch<SetStateAction<Comentario[]>>;
  single: boolean;
}) {
  const [comment, setComment] = useState("");

  const [state, action] = useFormState(postarComentario, {
    ok: false,
    data: null,
    error: "",
  });

  useEffect(() => {
    if (state.ok && state.data) {
      setComments((comments) => [...comments, state.data]);
      setComment("");
    }
  }, [setComments, state]);

  return (
    <form
      action={action}
      className={`${styles.form} ${single ? styles.single : ""}`}
    >
      <input type="hidden" name="id" id="id" value={id} />
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <FormButton />
      <ErrorMessage error={state.error} />
    </form>
  );
}

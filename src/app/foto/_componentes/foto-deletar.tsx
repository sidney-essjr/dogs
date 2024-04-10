import { useState } from "react";
import styles from "./foto-deletar.module.css";
import deletarFoto from "@/actions/deletar-foto";

export default function FotoDeletar({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      await deletarFoto(id);
    }
    setLoading(false);
  }

  return (
    <div className={styles.delete}>
      {loading ? (
        <button disabled>Deletar</button>
      ) : (
        <button onClick={handleClick}>Deletar</button>
      )}
    </div>
  );
}

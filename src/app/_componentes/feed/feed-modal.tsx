"use client";

import { FotoData } from "@/actions/obter-foto";
import FotoConteudo from "@/app/foto/_componentes/foto-conteudo";
import styles from "./feed-modal.module.css";
import { usePathname, useRouter } from "next/navigation";

export default function FeedModal({ foto }: { foto: FotoData }) {
  const router = useRouter();
  const pathname = usePathname();

  if (!pathname.includes("foto")) {
    return null;
  }

  function handleOutsideClick(event: React.MouseEvent<HTMLElement>) {
    if (event.target === event.currentTarget) router.back();
  }

  return (
    <section className={styles.modal} onClick={handleOutsideClick}>
      <FotoConteudo data={foto} single={false} />;
    </section>
  );
}

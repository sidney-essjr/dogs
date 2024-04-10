"use client";

import { FotoData } from "@/actions/obter-foto";
import styles from "./foto_conteudo.module.css";
import Link from "next/link";
import { useUserContext } from "@/context/user-context";
import FotoDeletar from "./foto-deletar";
import Image from "next/image";

export default function FotoConteudo({
  data,
  single,
}: {
  data: FotoData;
  single: boolean;
}) {
  const { user } = useUserContext();
  const { photo, comments } = data;

  return (
    <div className={`${styles.photo} ${single ? styles.single : ""}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} width={1000} height={1000} />
      </div>
      <div className={styles.details}>
        <p className={styles.author}>
          {user && user.username === photo.author ? (
            <FotoDeletar id={String(photo.id)} />
          ) : (
            <Link href={`/perfil/${photo.author}`}>@{photo.author}</Link>
          )}
          <span className={styles.visualizacoes}>{photo.acessos}</span>
        </p>
        <h1 className="title">
          <Link href={`/foto/${photo.id}`}>{photo.title}</Link>
        </h1>
        <ul className={styles.attributes}>
          <li>{photo.peso} kg</li>
          <li>{photo.idade} anos</li>
        </ul>
      </div>
      {/* <PhotoComments single={single} id={photo.id} comments={comments} /> */}
    </div>
  );
}

import { Foto } from "@/actions/obter-fotos";
import Image from "next/image";
import Link from "next/link";
import styles from "./feed.module.css";
import NotFound from "@/app/not-found";

export default function FeedFotos({ fotos }: { fotos: Foto[] }) {
  if (!fotos) return <NotFound />;

  return (
    <ul className={`${styles.feed} animeLeft`}>
      {fotos.map((foto, i) => (
        <li className={styles.foto} key={foto.id + i}>
          <Link href={`/foto/${foto.id}`}>
            <Image
              src={foto.src}
              alt={foto.title}
              width={1500}
              height={1500}
              sizes="80vw"
            />
            <span className={styles.visualizacao}>{foto.acessos}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

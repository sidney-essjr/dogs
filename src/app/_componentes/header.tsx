import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
  const usuario = { nome: "Sidney", autenticado: true };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link href={"/"} className={styles.logo}>
          <Image
            src="/assets/dogs.svg"
            width={28}
            height={22}
            alt="Logo do site Dogs"
            priority
          />
        </Link>
        {usuario ? (
          <Link href={"/conta"} className={styles.login}>
            {usuario.nome}
          </Link>
        ) : (
          <Link href={"/acesso"} className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}

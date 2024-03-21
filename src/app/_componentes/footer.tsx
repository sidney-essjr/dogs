import Image from "next/image";
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src={"/assets/dogs-footer.svg"}
        alt="Imagem do rodape do site"
        width={28}
        height={22}
      />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
}

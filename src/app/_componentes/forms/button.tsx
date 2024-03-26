import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

type FormsButton = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...rest }: FormsButton) {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
}

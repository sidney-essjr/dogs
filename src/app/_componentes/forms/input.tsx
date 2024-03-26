import { InputHTMLAttributes } from "react";
import styles from "./input.module.css";

type InputForm = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export default function Input({ label, id, error, ...rest }: InputForm) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={rest.name}>
        {label}
      </label>
      <input className={styles.input} type="text" id={rest.name} {...rest} />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

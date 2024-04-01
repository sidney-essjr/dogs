import React, { ReactNode } from "react";
import styles from "./acesso.module.css";

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.acesso}>
      <div className={styles.forms}>{children}</div>
    </div>
  );
}

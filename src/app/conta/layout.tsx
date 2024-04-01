import { ReactNode } from "react";
import ContaHeaderNav from "./_componentes/header";

export default function ContaLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container">
      <ContaHeaderNav />
      {children}
    </div>
  );
}

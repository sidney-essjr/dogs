"use client";

import { useUserContext } from "@/context/user-context";

export default function ContaPage() {
  const { user } = useUserContext();
  return (
    <section>
      <h1>{user?.nome}</h1>
    </section>
  );
}

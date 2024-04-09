"use client";

import { Foto, obterFotos } from "@/actions/obter-fotos";
import { useEffect, useRef, useState } from "react";
import FeedFotos from "./feed-fotos";

export default function Feed({
  fotos,
  user,
}: {
  fotos: Foto[];
  user?: 0 | string;
}) {
  const [fotosFeed, setFotosFeed] = useState<Foto[]>(fotos);
  const [page, setPage] = useState(1);
  const [infinite, setInfinite] = useState(fotos.length < 6 ? false : true);
  const [loading, setLoading] = useState(false);

  const fetching = useRef(false);

  function infiniteScroll() {
    if (fetching.current) return;
    fetching.current = true;
    setLoading(true);
    setTimeout(() => {
      setPage((currentPage) => currentPage + 1);
      fetching.current = false;
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    if (page === 1) return;
    async function obterFotosDaPagina(page: number) {
      const actionData = await obterFotos(
        { page, total: 6, user: user },
        { cache: "no-store" }
      );
      if (actionData && actionData.data !== null) {
        setFotosFeed((fotosAtuais) => [...fotosAtuais, ...actionData.data]);
        if (actionData.data.length < 6) setInfinite(false);
      }
    }
    obterFotosDaPagina(page);
  }, [page, user]);

  useEffect(() => {
    if (infinite) {
      window.addEventListener("scroll", infiniteScroll);
      window.addEventListener("wheel", infiniteScroll);
    } else {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    }
    return () => {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      <FeedFotos fotos={fotosFeed} />
      {loading && <p>Carregando...</p>}
    </div>
  );
}

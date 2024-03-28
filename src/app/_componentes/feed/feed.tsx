import { Foto } from "@/actions/obter-fotos";
import FeedFotos from "./feed-fotos";

export default function Feed({ fotos }: { fotos: Foto[] }) {
  return (
    <div>
      <FeedFotos fotos={fotos} />
    </div>
  );
}

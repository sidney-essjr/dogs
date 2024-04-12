import { Comentario } from "@/actions/obter-foto";
import { useUserContext } from "@/context/user-context";
import { useEffect, useRef, useState } from "react";
import styles from "./foto-comentario.module.css";
import FotoComentarioForm from "./foto-comentario-form";

export default function FotoComentario(props: {
  single: boolean;
  id: number;
  comments: Comentario[];
}) {
  const [comments, setComments] = useState(() => props.comments);
  const commentsSection = useRef<HTMLUListElement>(null);
  const user = useUserContext();

  useEffect(() => {
    if (commentsSection.current)
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <div>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.single ? styles.single : ""}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {user && (
        <FotoComentarioForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </div>
  );
}

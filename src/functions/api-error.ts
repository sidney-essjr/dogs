export default function apiError(error: unknown): {
  ok: false;
  data: null;
  error: string;
} {
  if (error instanceof Error) {
    return { ok: false, data: null, error: error.message };
  } else {
    return { ok: false, data: null, error: "Erro genérico" };
  }
}

import React from "react";

export default function ErrorMessage({ error }: { error: string }) {
  if (error !== "")
    return (
      <p style={{ color: "#f31", margin: "1rem 0", fontSize: "12px" }}>
        {error}
      </p>
    );
}

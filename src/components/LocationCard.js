import React from "react";

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <>
      <div>{name}</div>
      <p>{type}</p>
    </>
  );
}

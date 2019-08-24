import React from "react";

export default function CharacterCard({ image, name }) {
  return (
    <div className="character-list">
      <img src={image} alt={name} style={{ width: "150px" }} />
      <p>{name}</p>
    </div>
  );
}

import React, { useEffect } from "react";

export default function Joker(props) {
  const { setEpisode, bag, removeBag } = props;

  return (
    <div>
      Flo vous emmerde.
      {bag.pen
        ? "Vous faites un joker avec le stylo"
        : "Vous baissez les yeux et passez votre chemin"}
      <br />
      <br />
      <br />
      {bag.pen && (
        <div
          onClick={() => {
            removeBag("pen");
            setEpisode("suite");
          }}
        >
          faire un joker
        </div>
      )}
      <br />
      <br />
      <div
        onClick={() => {
          setEpisode("depart");
        }}
      >
        se soumettre et revenir au depart
      </div>
    </div>
  );
}

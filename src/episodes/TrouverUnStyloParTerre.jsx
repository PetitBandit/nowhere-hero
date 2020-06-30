import React from "react";

export default function TrouverUnStyloParTerre(props) {
  const { setEpisode, bag, addBag } = props;
  return (
    <div>
      oh ! un stylo ! Je le ramasse, ça pourrait servir dans un combat.
      <br />
      <br />
      <div
        style={{ color: "tomato" }}
        onClick={() => {
          addBag("pen");
          setEpisode("inthestreet");
        }}
      >
        ramasser le stylo
      </div>
      <div
        onClick={() => {
          setEpisode("inthestreet");
        }}
      >
        passer mon chemin
      </div>
    </div>
  );
}

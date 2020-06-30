import React, { useEffect } from "react";

export default function InTheStreet(props) {
  const { setEpisode, bag, addBag } = props;

  useEffect(() => {
    console.log("effect est lancé a chaque fois que le composant render");
    addBag("douille");
  }, []);

  return (
    <div>
      Jonathan te mets une douille.
      <br />
      <br />
      <div
        onClick={() => {
          setEpisode("joker");
        }}
      >
        énervé, tu continue à marcher.
      </div>
    </div>
  );
}

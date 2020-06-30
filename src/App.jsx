import React, { useState } from "react";
import "./App.css";
import LeDepart from "./episodes/LeDepart";
import LaSuite from "./episodes/LaSuite";
import TrouverUnStyloParTerre from "./episodes/TrouverUnStyloParTerre";
import InTheStreet from "./episodes/InTheStreet";
import Joker from "./episodes/Joker";

const episodesList = {
  depart: LeDepart,
  suite: LaSuite,
  trouverstylo: TrouverUnStyloParTerre,
  inthestreet: InTheStreet,
  joker: Joker,
};

function App() {
  const [episode, setEpisode] = useState("depart");
  const [bag, setBag] = useState({});

  console.log(bag);
  const Component = episodesList[episode];
  if (!Component) return `Le composant ${episode} nest pas dans episodeList`;

  const addBag = (itemName) => {
    setBag((oldBag) => ({
      ...oldBag,
      [itemName]: true,
    }));
  };

  const removeBag = (itemName) => {
    setBag((oldBag) => ({
      ...oldBag,
      [itemName]: false,
    }));
  };

  return (
    <div className="App">
      Aventure
      <div className="episode">
        <Component
          setEpisode={setEpisode}
          setBag={setBag}
          addBag={addBag}
          removeBag={removeBag}
          bag={bag}
        />
      </div>
    </div>
  );
}

export default App;

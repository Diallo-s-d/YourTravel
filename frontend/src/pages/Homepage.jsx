import React, { useState, useEffect } from "react";
import axios from "axios";
import TravelCard from "../components/TravelCardresult";

export default function OneTravel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/announces`)
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <div className="home">
      <div className="intro">
        <h2>
          🌍 Embarquez pour un voyage qui transcende les frontières et vous
          transporte vers des destinations exotiques.
        </h2>
        <br />
        <h2>
          🏝️ Nous vous invitons à vivre l'excitation de nouvelles cultures, la
          splendeur de paysages époustouflants et l'authenticité de rencontres
          inoubliables.
        </h2>
        <br />
        <h2>
          ✈️ Réservez dès maintenant et laissez-vous guider par votre soif
          d'aventure. YourTravel est votre partenaire pour des voyages
          exceptionnels, où chaque moment est une histoire à raconter.
        </h2>
      </div>
      <div className="travel_list">
        {data.map((announce) => (
          <TravelCard key={announce.announce_id} travel={announce} />
        ))}
      </div>
    </div>
  );
}

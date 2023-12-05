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
    <div className="travel_list">
      {data.map((announce) => (
        <TravelCard key={announce.announce_id} travel={announce} />
      ))}
    </div>
  );
}

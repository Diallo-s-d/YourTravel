import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TravelDetailCard from "../components/TravelDetailCard";

export default function TravelDetailPage() {
  const [travels, setTravels] = useState([]);
  const { id } = useParams();

  const getCars = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/announces/${id}`)
      .then((response) => {
        setTravels(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getCars();
  }, [id]);

  return (
    <div className="card_section">
      <div className="first_element">
        <TravelDetailCard details={travels} />
      </div>
    </div>
  );
}

/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ExportContext from "../contexts/Context";
import Travelcard from "../components/TravelCardresult";

export default function MyFavorite() {
  const { infoUser } = useContext(ExportContext.Context);
  const [favoris, setFavoris] = useState([]);

  const getFavoris = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/favorites/${infoUser.id}`)
      .then((response) => {
        setFavoris(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const deleteAnnounce = (announceId) => {
    axios
      .delete(
        `${import.meta.env.VITE_BACKEND_URL}/favorites/${
          infoUser.id
        }/${announceId}`
      )
      .then(() => {
        setFavoris((prevFavoris) =>
          prevFavoris.filter((item) => item.announce_id !== announceId)
        );
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  useEffect(() => {
    console.info(infoUser.id);
    getFavoris();
  }, [infoUser.id]);

  console.info(favoris);
  return (
    <div className="main">
      <h1>Mes Favoris</h1>
      <div className="card_section">
        {favoris.map((favorite) => (
          <div className="card" key={favorite.announce_id}>
            <Travelcard
              // key={(favorite.announce_id, favorite.user_id)}
              travel={favorite}
            />
            <div className="supprimer">
              <button
                type="submit"
                onClick={() => deleteAnnounce(favorite.announce_id)}
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

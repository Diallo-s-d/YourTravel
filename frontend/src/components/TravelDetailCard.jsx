import PropTypes from "prop-types";
import React from "react";
import "../styles/traveldetailcard.css";

export default function TravelDetailcard({ details }) {
  if (!details) {
    return <p>Erreur d'affichage des détails</p>;
  }

  return (
    details && (
      <div className="resanounce">
        <div className="detailsannounce">
          <div className="detailsimage">
            <img src={details.image} alt="" />
          </div>
          <div className="info">
            <div className="lieu">
              <h2>
                {details.continent_name} - {details.country_name}
              </h2>
            </div>
            <div className="price">
              <div className="icon-text">
                <img src="src/assets/images/AV.jpg" alt="icone" />
              </div>
              <h4> Solo | Aller-Retour</h4>
              <h3>{details.price} € </h3>
            </div>
            <div className="title">
              <h2>{details.title}</h2>
            </div>
            <div className="description">
              <h3>
                {details.description} - {details.activity}{" "}
              </h3>
            </div>
          </div>
          <div className="boutton">
            <button type="submit"> Réserver </button>
          </div>
        </div>
      </div>
    )
  );
}

TravelDetailcard.propTypes = {
  details: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    continent_name: PropTypes.string,
    country_name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    activity: PropTypes.string,
  }).isRequired,
};

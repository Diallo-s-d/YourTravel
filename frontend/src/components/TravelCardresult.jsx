import PropTypes from "prop-types";
import React from "react";
import "../styles/travelcardresult.css";

export default function Travelcard({ travel }) {
  return (
    travel && (
      <div className="allanounce">
        <div className="travelannounce">
          <div className="travelimage">
            <img src={travel.image} alt="" />
          </div>
          <div className="info">
            <div className="lieu">
              <h2>
                {travel.continent_name} - {travel.country_name}
              </h2>
            </div>
            <div className="price">
              <div className="icon-text">
                <img src="src/assets/images/airplane_1085493.png" alt="icone" />
              </div>
              <h4> Solo | Aller-Retour</h4>
              <h3>{travel.price} € </h3>
            </div>
          </div>
          <div className="boutton">
            <button type="submit">N'hésite pas et fonce ! </button>
          </div>
        </div>
      </div>
    )
  );
}

Travelcard.propTypes = {
  travel: PropTypes.shape({
    image: PropTypes.string,
    continent_name: PropTypes.string,
    country_name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

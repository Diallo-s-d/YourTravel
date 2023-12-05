import React, { useState } from "react";
import axios from "axios";
import "../styles/newsletter.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Alert, AlertTitle } from "@mui/material";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [success, setSucces] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const sendRegisterData = (event) => {
    event.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/newsletters`, {
        email,
      })

      .then((response) => {
        setSucces(response.data.message);
        setError(false);
        console.info(response);
      })
      .catch((err) => {
        if (err.response.data.error === `"email" is not allowed to be empty`) {
          setError("L'email ne peut pas être vide");
        } else if (
          err.response.data.error === `"email" must be a valid email`
        ) {
          setError("Merci de mettre un email valide");
        } else if (err.response.data.error === 1062) {
          setError("L'email est déjà enregistré");
        } else {
          console.error(err.response.data.error);
        }
        setSucces(false);
      });
  };

  return (
    <>
      <div className="newsletters">
        <div className="title">
          <h2>Newsletter</h2>
        </div>

        <div className="text">
          <p>
            Rejoins plus de 100,000 Travelers, inscris-toi à la newsletter pour
            recevoir en exclusivité nos bons plans directement dans ta boîte
            mail.
          </p>
        </div>

        <form className="subscribe" onSubmit={sendRegisterData}>
          <div className="inscriptionnews">
            <input
              type="email"
              placeholder="Saisi ton adresse mail ..."
              onChange={handleChangeEmail}
            />
            <input type="submit" value="Inscris-toi" />
          </div>
        </form>
      </div>
      {/* {success ? (
        <p className="messagesucces">{success}</p>
      ) : (
        "Vous êtes bien inscrit à notre Newsletter"
      )}
      {error ? (
        <p className="messageerror">{error}</p>
      ) : (
        "Merci de remplir tous les champs obligatoires"
      )} */}
      <div className="alerte">
        {success ?? (
          <Alert severity="success">
            <AlertTitle>Vous êtes bien inscrit à notre Newsletter</AlertTitle>
            {success}
          </Alert>
        )}

        {error && (
          <Alert severity="error">
            <AlertTitle>
              Merci de remplir tous les champs obligatoires
            </AlertTitle>
            {error}
          </Alert>
        )}
      </div>
    </>
  );
}

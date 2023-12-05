import React, { useState } from "react";
import "../styles/loginPage.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// // import { AiOutlineArrowRight } from "react-icons/ai";
// import { Alert, AlertTitle } from "@mui/material";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const navigateToHomepage = () => {
    navigate("/");
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const sendCredentials = (event) => {
    event.preventDefault();

    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/logins`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.info(response);
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("firstname", response.data.firstname);
        localStorage.setItem("lastname", response.data.lastname);
        setSuccess(response.data.message);
        setError(false);
        navigateToHomepage();
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setSuccess(false);
      });
  };

  return (
    <div className="login_background">
      <div className="login_up">
        <div className="login_title">
          <h1>Commence ton voyage en te connectant !</h1>
        </div>
        <div className="login_header">
          <div className="login_formulaire">
            <form onSubmit={sendCredentials}>
              <h2>Adresse Mail</h2>
              <input
                type="email"
                placeholder="Adresse email"
                onChange={handleChangeEmail}
              />
              <br />
              <br />
              <h2>Mot de Passe</h2>
              <input
                type="password"
                placeholder="Mot de passe"
                onChange={handleChangePassword}
              />
              <button className="btn-connecter" type="submit">
                Se connecter
              </button>

              <br />
              <br />
            </form>

            <Link to="/signup" className="btn-signup">
              Tu n'as pas de compte chez nous, inscris-toi ici!
            </Link>
            <br />
            {success ? <p className="messagesucces">{success}</p> : ""}
            {error ? <p className="messageerror">{error}</p> : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

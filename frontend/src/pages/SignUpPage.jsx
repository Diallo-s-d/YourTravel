import axios from "axios";
import { useState } from "react";
import "../styles/signUpPage.css";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkedPassword, setCheckedPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChangePrenom = (event) => {
    setLastname(event.target.value);
  };
  const handleChangeNom = (event) => {
    setFirstname(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleChangeCheckedPassword = (event) => {
    setCheckedPassword(event.target.value);
  };

  const sendRegisterData = (event) => {
    event.preventDefault();

    if (password === checkedPassword) {
      console.info("email", email);
      console.info("password", password);
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/users`, {
          firstname,
          lastname,
          email,
          password,
        })

        .then((response) => {
          setSuccess(response.data.message);
          setError(false);
          console.info(response);
        })
        .catch((err) => {
          if (
            err.response.data.error === `"firstname" is not allowed to be empty`
          ) {
            setError("Le Prenom ne peut pas être vide");
          } else if (
            err.response.data.error === `"firstname" must be a valid name`
          ) {
            setError("Mettre un prenom valide");
          } else if (
            err.response.data.error === `"lastname" is not allowed to be empty`
          ) {
            setError("Le Nom ne peut pas être vide");
          } else if (
            err.response.data.error === `"lastname" must be a valid name`
          ) {
            setError("Mettre un nom valide");
          } else if (
            err.response.data.error === `"email" is not allowed to be empty`
          ) {
            setError("L'email ne peut pas être vide");
          } else if (
            err.response.data.error === `"email" must be a valid email`
          ) {
            setError("Mettre un email valide");
          } else if (
            err.response.data.error === `"password" is not allowed to be empty`
          ) {
            setError("Merci de donner un mot de passe");
          } else if (
            err.response.data.error ===
            `"password" length must be at least 8 characters long`
          ) {
            setError("Le mot de passe doit faire au moins 8 caractères");
          } else if (err.response.data.error === 1062) {
            setError("L'email est déjà enregistré");
          } else {
            console.error(err.response.data.error);
          }
          setSuccess(false);
        });
    } else {
      setError("Les mots de passe ne correspondent pas");
      console.error("Les mots de passe ne correspondent pas");
    }
  };

  return (
    <>
      <div className="signup_background">
        <div className="sign_up">
          <Link to="/login" className="btn-login">
            Tu as déjà un compte chez nous, connecte-toi ici!
          </Link>
          <div className="title">
            <h1>Deviens Travelers et commence ton aventure !</h1>
          </div>
          <div className="formulaire">
            <form onSubmit={sendRegisterData}>
              <div className="identity">
                <div className="firstname">
                  <p>Prénom</p>
                  <input
                    type="text"
                    placeholder="Entre ton prénom..."
                    onChange={handleChangePrenom}
                  />
                </div>
                <div className="lastname">
                  <p>Nom</p>
                  <input
                    type="text"
                    placeholder="Entre ton nom..."
                    onChange={handleChangeNom}
                  />
                </div>
              </div>
              <p>Email</p>
              <input
                type="email"
                placeholder="Entre ton adresse email..."
                onChange={handleChangeEmail}
              />
              <p>Mot de passe</p>
              <input
                type="password"
                placeholder="Entre ton mot de passe..."
                onChange={handleChangePassword}
              />
              <p>Confirmation du mot de passe</p>
              <input
                type="password"
                placeholder="Confirme ton mot de passe..."
                onChange={handleChangeCheckedPassword}
              />
              <button className="btn-create" type="submit">
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </div>
      {success ? <p>{success}</p> : ""}
      {error ? <p>{error}</p> : ""}
    </>
  );
}

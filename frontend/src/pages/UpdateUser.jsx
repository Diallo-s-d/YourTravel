import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../styles/updateUser.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import ExportContext from "../contexts/Context";

export default function UpdateUser() {
  const [selectedUser, setSelectedUser] = useState({
    user_id: "",
    firstname: "",
    lastname: "",
    email: "",
  });

  const { infoUser } = useContext(ExportContext.Context);

  console.info("infouser", infoUser.id);
  const getUser = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${infoUser.id}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.info("Response from getUser:", response.data);
        setSelectedUser({
          user_id: response.data.user_id,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
          email: response.data.email,
        });
      })
      .catch((error) => {
        console.error("Error getting user:", error);
      });
  };
  console.info("id", infoUser.id);
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      // eslint-disable-next-line prettier/prettier
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/users/${infoUser.id}`,
        selectedUser
      )
      .then((response) => {
        // toast.success("User updated successfully!");
        console.info(response.data);
      })
      .catch((error) => {
        // toast.error("Error updating user!");
        console.error("Error updating user:", error);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    console.info(selectedUser);
  }, [selectedUser]);

  return (
    <div className="update_user_panel">
      {/* <Avatardashboard />
      <ToastContainer /> */}
      {selectedUser && (
        <form className="user-form" onSubmit={onSubmit}>
          <div className="inputs">
            <label htmlFor="firstname">Nom</label>
            <input
              type="text"
              placeholder={selectedUser.firstname}
              value={selectedUser.firstname}
              onChange={(event) =>
                setSelectedUser({
                  ...selectedUser,
                  firstname: event.target.value,
                })
              }
            />
          </div>
          <div>
            <label htmlFor="lastname">Prénom</label>
            <input
              type="text"
              placeholder={selectedUser.lastname}
              value={selectedUser.lastname}
              onChange={(event) =>
                setSelectedUser({
                  ...selectedUser,
                  lastname: event.target.value,
                })
              }
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder={selectedUser.email}
              value={selectedUser.email}
              onChange={(event) =>
                setSelectedUser({
                  ...selectedUser,
                  email: event.target.value,
                })
              }
            />
          </div>
          <button type="submit"> Enregistrer les modifications </button>
        </form>
      )}
    </div>
  );
}

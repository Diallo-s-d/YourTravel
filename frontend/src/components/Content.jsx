import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import TravelDetailPage from "../pages/TravelDetailPage";
import UpdateUser from "../pages/UpdateUser";
import Backoffice from "../pages/Backoffice";

export default function Content() {
  return (
    <section className="content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/traveldetails/:id" element={<TravelDetailPage />} />
        <Route path="/backoffice" element={<Backoffice />} />
        <Route path="/updateUser" element={<UpdateUser />} />
      </Routes>
    </section>
  );
}

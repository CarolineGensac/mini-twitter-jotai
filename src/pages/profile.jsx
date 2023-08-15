import React from "react";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { identityAtom } from "../store";

const Profile = () => {
  const history = useNavigate();
  const [state, setState] = useAtom(identityAtom); // Utilisation de la variable state

  const handleLogout = () => {
    // Réinitialiser les données d'identité
    setState({ email: "", password: "" });

    // Rediriger vers la page d'accueil
    history("/");
  };

  return (
    <>
      <h2>Profile</h2>
      <p>Email: {state.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Profile;

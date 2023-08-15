import React from "react";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { identityAtom } from "../store";

const Register = () => {
  const history = useNavigate();
  const [state, setState] = useAtom(identityAtom);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter la logique d'enregistrement ici si nécessaire
    history("/profile"); // Redirige vers la page du profil
  };

  return (
    <>
      <h2>Let's register</h2>
      <form onSubmit={handleOnSubmit}>
        <label for="email"> Email </label>
        <input
          placeholder="email..."
          name="email"
          type="email"
          value={state.email}
          onChange={handleOnChange}
          required
        />
        <label for="password"> Password </label>
        <input
          placeholder="*******"
          name="password"
          type="password"
          value={state.password}
          onChange={handleOnChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;

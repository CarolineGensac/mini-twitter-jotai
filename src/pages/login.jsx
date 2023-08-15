import React from "react";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { identityAtom } from "../store";

const Login = () => {
  const history = useNavigate();
  const [state, setState] = useAtom(identityAtom);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleLogin = () => {
    // Vous pouvez ajouter la logique de validation du login ici
    history("/profile"); // Redirige vers la page du profil après la connexion
  };

  return (
    <>
      <h2>Login</h2>
      <form>
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
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </>
  );
};

export default Login;

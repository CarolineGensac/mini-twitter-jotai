import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "jotai";
import Navbar from "./components/Navbar";
// import DarkMode from "./components/DarkMode";
import Home from "./pages/home.jsx";
import Profile from "./pages/profile.jsx";
// import Register from "./pages/register.jsx";
import RegisterBis from "./pages/registerbis.jsx";
import Login from "./pages/login.jsx";
import "./styles/style.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/register" element={<RegisterBis />} />
          <Route path="/login" element={<Login />} />        
        </Routes>
        {/* <DarkMode /> */}
      </main>
    </BrowserRouter>
  );
};

// ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
)
import React from "react";

const RegisterBis = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    const form = e.target;

    const elements = form.elements;

    const username = elements.username.value;
    const email = elements.email.value; 

    form.reset();

    alert(`Username: ${username} Email: ${email}`);

  };

  fetch('http://localhost:1337/api/auth/local/register', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(RegisterBis)
  });

  return ( 
    <>
    <h2>Let's register BIS</h2>
    <form onSubmit={handleSubmit}>
      <label htmlfor="username"> Username </label>
      <input
        placeholder="username..."
        id="username"
        type="text"
      />
      <label hmtlfor="email"> Email </label>
      <input
        placeholder="email"
        type="email"
        id="email"
      />
      <label htmlfor="password"> Password </label>
      <input
        placeholder="********"
        id="password"
        type="password"
      />
      <button type="submit">Register</button>
    </form>
  </>
  );
};

export default RegisterBis;
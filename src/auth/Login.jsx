import axios from "axios";
import React, { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const data = await axios.post(
      "http://localhost:3000/api/auth/login",
      {
        email: email,
        password: password,
      },
      {
        withCredentials: true,
      },
    );
    console.log(data.data.message);
  };

  return (
    <div>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" onClick={login} />
      </form>
    </div>
  );
};

export default Login;

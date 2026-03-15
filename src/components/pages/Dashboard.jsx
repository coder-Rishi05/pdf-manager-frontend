// pages/Dashboard.jsx
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Backend se user fetch karo (session based)
    fetch("http://localhost:5000/api/auth/profile", {
      credentials: "include", // ✅ cookies/session bhejne ke liye zaroori
    })
      .then((res) => res.json())
      .then((data) => setUser(data.user))
      .catch(() => window.location.href = "/login");
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <img src={user.avatar} alt="avatar" />
      <p>{user.email}</p>
      <button onClick={() => {
        window.location.href = "http://localhost:5000/api/auth/logout";
      }}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
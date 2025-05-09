import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  // ✅ Lade alle Benutzer beim Start
  useEffect(() => {
    fetch("http://localhost:8080/api/users", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("GET users:", data); // Debug: Server response
        setUsers(data); // <== direkt setzen, wenn Server ein Array zurückgibt
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/users", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Server error");
        return res.json();
      })
      .then((newUser) => {
        console.log("POST response:", newUser);
        setUsers([...users, newUser]); // füge neuen Nutzer hinzu
        setName("");
      })
      .catch((err) => console.error("Post error:", err));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Benutzerliste</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name eingeben"
        />
        <button type="submit">Hinzufügen</button>
      </form>
      <ul>
        {users.map((u) => (
          <li key={u.id || u.name}>{u.name}</li> // fallback auf name falls id fehlt
        ))}
      </ul>
    </div>
  );
}

export default App;

import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

 async function login(event){
    event.preventDefault();
  await fetch('http://localhost:4000/login', {
        method: "POST",
        body: JSON.stringify({username,password}),
        headers: {'Content-Type': 'application/json'},
    })
  }

  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="userename"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button>Login</button>
    </form>
  );
}

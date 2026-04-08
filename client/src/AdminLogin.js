import React, { useState } from "react";

function AdminLogin() {
const [user, setUser] = useState("");
const [pass, setPass] = useState("");
const [msg, setMsg] = useState("");

const login = async () => {
const res = await fetch("/api/admin/login", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ username: user, password: pass })
});

const data = await res.json();
setMsg(data.message);
};

return (
<div>
<h2>Admin Login</h2>
<input placeholder="Username" onChange={e => setUser(e.target.value)} />
<input type="password" placeholder="Password" onChange={e => setPass(e.target.value)} />
<button onClick={login}>Login</button>
<p>{msg}</p>
</div>
);
}

export default AdminLogin;

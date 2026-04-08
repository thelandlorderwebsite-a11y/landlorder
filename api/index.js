import 'dotenv/config';

export default function handler(req, res) {
if (req.method === "GET") {
return res.status(200).send("Backend running 🚀");
}

if (req.url === "/api/admin/login") {
const { username, password } = req.body;

if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
return res.json({ success: true, message: "Logged in" });
} else {
return res.status(401).json({ success: false, message: "Invalid login" });
}
}

if (req.url === "/api/ai") {
const { message } = req.body;
return res.json({ reply: `AI says: "${message}" — system working` });
}

res.status(404).send("Not found");
}

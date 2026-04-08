import React, { useState } from "react";

function AIChat() {
const [input, setInput] = useState("");
const [reply, setReply] = useState("");

const send = async () => {
const res = await fetch("/api/ai", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ message: input })
});

const data = await res.json();
setReply(data.reply);
};

return (
<div>
<h2>AI Assistant</h2>
<input value={input} onChange={e => setInput(e.target.value)} />
<button onClick={send}>Send</button>
<p>{reply}</p>
</div>
);
}

export default AIChat;

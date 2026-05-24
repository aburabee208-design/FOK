const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/validate", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({
    valid: true,
    reason: "ok",
    expires: "2026-05-29T23:59:59Z",
    sig: "42e051828c47281e49f21a0d674bbcb014f645118c8961e8bb965053bcea1132"
  }));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

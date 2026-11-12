const express = require("express");
const app = express();
const port = 3000;

app.get("/api/pozdrav", (req, res) => {
  res.json({ poruka: "Hello, World!" });
});

app.listen(port, () => {
  console.log(`Server sluša na portu:${port}`);
});

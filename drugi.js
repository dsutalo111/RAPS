const expression = require("express");
const app = expression();
const port = 3000;

app.post("/api/ime", (req, res) => {
  const ime = req.body.ime;
  res.json({ odgovor: `Dobra večer, ${ime}!` });
});

app.listen(port, () => {
  console.log(`Server sluša na portu:${port}`);
});

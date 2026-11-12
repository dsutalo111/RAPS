//napravimo rutu /get /kvadrat

const express = require("express");
const app = express();
const PORT = 3000;

app.get("/kvadrat/:n", (req, res) => {
  const broj = Number(req.params.n); //kada nema upitnika nego je url samo broj, koristimo params
  if (Number.isNaN(broj)) {
    res.satus(400).json({ greska: "Podatak koji ste poslali nije broj" });
  } else {
    res.json({ rezultat: broj * broj });
  }
});
app.listen(PORT, () => {
  console.log(`Server radi na portu${PORT}`);
});

//napraviti rutu get /zbroj koja prima parametre ai b kroz url primjer

const express = require("express");
const app = express();
const port = 3000;

app.get("/zbroj", (req, res) => {
  const broj1 = Number(req.query.a);
  const broj2 = Number(req.query.b);

  if (Number.isNaN(broj1) || Number.isNaN(broj2)) {
    res.status(400).json({ error: "Parametri nisu brojevi" });
  } else {
    res.json({ rezultat: broj1 + broj2 });
  }
});

app.listen(port, () => {
  console.log(`Server radi na portu ${port}`);
});

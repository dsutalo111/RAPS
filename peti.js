//preuzeti vic sa stranica : https://api.chucknorris.io/jokes/random

const express = require("express");
const app = express();
const PORT = 3000;

const axios = require("axios");

app.get("/", async (req, res) => {
  res.send("ako želite vic o Chuck Norrisu, idite na /vic/chucknorris");
});

app.get("/chuck", async (req, res) => {
  try {
    const odgovor = await axios.get("https://api.chucknorris.io/jokes/random");
    res.json({ sala: odgovor.data.value });
  } catch (error) {
    res.status(500).json({ error: "Dogodila se greška" });
  }
});

app.listen(PORT, () => {
  console.log(`Server radi na portu ${PORT}`);
});

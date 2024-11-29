const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Ruta para obtener un chiste
app.get('/joke', async (req, res) => {
  try {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching joke' });
  }
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});

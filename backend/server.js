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
    res.status(500).json({ error: 'Error al obtener el chiste' });
  }
});

//Puerto listo en 3000
app.listen(port, () => {
  console.log(`Back corriendo en http://localhost:${port}`);
});

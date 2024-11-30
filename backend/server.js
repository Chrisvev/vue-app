import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors()); // Habilita CORS para todas las solicitudes

app.get('/api/joke', (req, res) => {
  res.json({ joke: "Why don’t skeletons fight each other? They don’t have the guts." });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});

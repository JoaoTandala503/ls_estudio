const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public'))); // para CSS, imagens, etc

// Rota principal
app.get('/', (req, res) => {
  res.render('index');
});

// Rota para /sobrenos
app.get('/sobrenos', (req, res) => {
  res.render('sobrenos');
});

app.get('/bandas', (req, res) => {
  res.render('bandas');
});

app.get('/videos', (req, res) => {
  res.render('videos');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

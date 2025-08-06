const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/sobrenos', (req, res) => {
  res.render('sobrenos');
});

app.get('/bandas', (req, res) => {
  res.render('bandas');
});

app.get('/videos', (req, res) => {
  res.render('videos');
});

// Porta dinâmica para Render
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${port}`);
});

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static('public'));


app.get('/api', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/paths', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api', (req, res) => {
    res.json({
      term: 'api',
    });
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
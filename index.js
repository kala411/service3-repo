const express = require('express');
const app = express();
const port = 3003;

app.get('/', (req, res) => {
  res.send('Hello from Service 3!');
});

app.listen(port, () => {
  console.log(`Service 3 is running on http://localhost:${port}`);
});


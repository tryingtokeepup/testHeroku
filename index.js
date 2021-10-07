const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

// use the packages above
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 9000;

app.use('/api/*', (_, res) => {
  res.json({ data: "This is Sayo's data lol" });
});

app.listen(port, () => {
  console.log(`Server alive on port ${port}`);
});

// console.log('alt + shift + down arrow = lots of lines! :D ');
// console.log(__dirname);
// console.log(__filename);
// console.log(process.env.USER);
// console.log(process.env.PORT);
// console.log(process.env.DB_PASS);

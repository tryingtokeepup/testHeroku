const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
// use the packages above - global middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

const port = process.env.PORT || 9000;

app.use('/api/*', (_, res) => {
  res.json({ data: "This is Sayo's data lol" });
});

app.use('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
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

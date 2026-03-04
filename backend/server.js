// require('dotenv').config(); // подключаем .env
// const app = require('./src/app');

// const PORT = process.env.PORT || 5000; // возьмёт порт из .env
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require('express')
const  { Pool } = require('pg')


const app = express()
app.use(express.json())

app.listen(3000, () => {
  console.log('server start: http://localhost:3000')
})
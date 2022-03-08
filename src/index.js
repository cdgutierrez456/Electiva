const express = require('express');
const mongoose = require('mongoose');
const my_app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

my_app.listen(port, (req, res) => {
  console.log(`Listening for the port ${port}`);
  /* res.send("Listening for the port ", port) */
});

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log('Conectados con mongodb'))
  .catch((err) => console.log(err));

my_app.get('/home', (req, res) => {
  res.send('Accediendo a primer endpoint');
});

my_app.get('/api/v1/home', (req, res) => {
  res.json({
    person_id: '1234431',
    person_name: 'Cristian',
    course: 'Electiva II',
    current_year: 2022,
  });
});

my_app.get('/api/v1/products', (req, res) => {
  res.json([
    {
      product_id: 'asdf234',
      pruduct: 'Tenis',
      brand: 'Adidas',
      reference: {
        number: 1232,
        size: {
          option1: { size1: 3, color: [opt1 = ({color: 'Azul', available: true})] },
          option2: { size2: 3, color: [opt1 = ({color: 'Negro', available: true})] },
          option3: { size3: 3, color: [opt1 = ({color: 'Violeta', available: true})] },
        },
      },
    },
    {
      product_id: '9876rgh',
      pruduct: 'Tenis',
      brand: 'Adidas',
      reference: {
        number: 22332,
        size: {
          option22: { size1: 12, color: [opt1 = ({color: 'Azul', available: true})] },
          option22: { size2: 12, color: [opt1 = ({color: 'Negro', available: true})] },
          option22: { size3: 12, color: [opt1 = ({color: 'Violeta', available: true})] },
        },
      },
    },
  ]);
});

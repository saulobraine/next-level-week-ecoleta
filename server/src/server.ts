import express from 'express';

const app = express();

app.get('/users', (request, response) => {


  response.json([
    'Saulo',
    'Braine',
    'Mary'
  ]);
});

app.listen(3333);
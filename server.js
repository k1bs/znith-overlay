const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/gsi', (req, res) => {
  console.log(Object.keys(req.body.round));
  res.status(200).send('yup');
});

app.all('*', (req, res) => {
  console.error('whoops, 400');
  res.status(400).json({
    message: 'Bad request',
  });
});

app.all((err, req, res) => {
  console.error('whoops, 500');
  console.error(err);
  res.status(500).json({
    error: err,
    message: err.message,
  });
});

app.listen(3771, () => {
  console.log('Listening on 3771');
});

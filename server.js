// const ctlExercises = require('./src/controllers/exercises');
const ctlParse = require('./src/controllers/parse');

const express = require('express');
const cors = require('cors');
const app = express();

app.set('json spaces', 2);
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    status: 'Server is running, please check url for return is object'
  })
})

// Listar exercicios do parse server
// app.get('/exercises', ctlExercises.listExercises);

// Proxy para o parse server
app.get('/:className', ctlParse.getClass);

app.listen(3030, function(){
  console.log('App is running on port 3030');
})
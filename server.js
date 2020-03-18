const ctlListExerciciesA = require('./src/controllers/listExerciciesA');
const ctlListExerciciesb = require('./src/controllers/listExerciciesB');

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

app.get('/exercicies-a', ctlListExerciciesA);
app.get('/exercicies-b', ctlListExerciciesb);

app.listen(3030, function(){
  console.log('App is running on port 3030');
})
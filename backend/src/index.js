const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');

app.use(express.json());

app.use(cors({
  origin: '*'
}));

app.use(routes);

app.listen(3333, () => {
    console.log('server on');
});

const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());

app.use(express.static(__dirname + '/uploads'));
app.use('/uploads', express.static('uploads'));

app.use(cors({
  origin: '*'
}));

app.use(routes);

app.listen(3333, () => {
    console.log('server on');
});

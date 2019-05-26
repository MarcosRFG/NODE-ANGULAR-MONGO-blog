const express = require('express');
const bodyParser = require('body-parser');
const routerApp = require('./routes/routes');
const cors = require('cors');

const app = express();

// configs
const PORT = '8081';
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// route main
app.use('/posts', routerApp);

// Init Application
app.listen(PORT, () => {
    console.log('Application running in port ', PORT)
});
const express = require('express');
const app = express();
const port = process.env.NODE_ENV == 'production' ? 80 : 8080;

app.use(express.static('dist'));

app.listen(port, () => console.log('Server Listening on Port port'));

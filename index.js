const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

/** Defini o pug como o view engine */
app.set('view engine', 'pug');

/** Defini a pasta views como a pasta dos components de view */
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => res.render('home'));

app.listen(port, () => console.log(`App listening on port ${port} ✌❤`));
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/error');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: false }));
// Add a middleware to return static files
// We pass the path to the folder which we want to delirev statically


// e.g. /admin/add-product
app.use('/admin', adminRoutes);
app.use(shopRoutes);


// Add a 404 page
app.use( errorController.notFound)
app.listen(3000);



// It will executed after every request
// Next it will be used to travel on the next middelware
// Next needs to be executed to travel from top to bottom
// app.use( (req, res, next) => {
//     console.log('Here I Am');
//     next();
// });
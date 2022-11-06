const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expenses_details_db');

const db = mongoose.connection;

db.on('error' , console.error.bind(console , 'error connnecting to database'));


db.once('open' , function(){
    console.log("Sucessfully Connected To database");
});
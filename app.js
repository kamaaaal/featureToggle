const express = require('express');
const app = express();
const mongoose = require('mongoose');
const featureRoute = require('./routes/features');

// connect to db
mongoose.connect('mongodb+srv://newUser:newPassword@cluster0.lueuf.mongodb.net/?retryWrites=true&w=majority',{
    dbName : 'featuresFlag'
})
.then(() => console.log('connected to the Database'))
.catch((err) => console.log(err));

// middlewares
app.use(express.json());
app.use(featureRoute);

// listening 
const port = 5000
app.listen(port,() => console.log('listening on ',port))
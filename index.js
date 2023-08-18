//Initial config
const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();

//A way to read JSON / Middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

//Endpoints
const personRoutes = require('./routes/person');
app.use('/person', personRoutes);

//Port to access API
mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.sfumow2.mongodb.net/apiDatabase?retryWrites=true&w=majority`)
    .then(() => {
        console.log('MongoDB connected!');
        app.listen(3000);
        console.log(3000);
    })
    .catch((err) => console.log(err));


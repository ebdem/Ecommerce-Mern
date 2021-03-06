const express = require("express");
const env = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

//Routes
const userRoutes = require('./routes/user');

//enviroment variable
env.config();


//mongoDb connection
//mongodb+srv://<username>:<password>@cluster0.ijjbt.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ijjbt.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,

    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
    ).then(() => {
        console.log("dataBase Connection success");
});


app.use(bodyParser());
app.use('/api', userRoutes);



app.listen(process.env.PORT, () => {
    console.log(`server is Running on Port ${process.env.PORT}`)
})

const express = require("express");
const env = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

//enviroment variable
env.config();


//mongoDb connection
//mongodb+srv://<username>:<password>@cluster0.ijjbt.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ijjbt.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,

    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    ).then(() => {
        console.log("dataBase Connection success");
});


app.use(bodyParser());


app.get('/', (req, res, next) => {
    res.status(200).json({
        message:"Hello From"
    })

})

app.post('/data', (req, res, next) => {
    res.status(200).json({
        message: req.body
    })

})

app.listen(process.env.PORT, () => {
    console.log(`server is Running on Port ${process.env.PORT}`)
})
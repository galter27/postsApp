const express = require('express');
const app = express()
const dotenv = require("dotenv").config()
const bodyParser = require("body-parser");

const mongoose = require('mongoose')

// Database Connection
mongoose.connect(process.env.DB_CONNECTION);
const mongodbConnection = mongoose.connection;
mongodbConnection.on("error", (error) => console.error(error));
mongodbConnection.once("open", () => console.log("Successfully Connected to Database"));

// Require Routes
const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');


// App configuration
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Authors: Gabi Matatov 322404088 & Gal Ternovsky 323005512')
})

app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
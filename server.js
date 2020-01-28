const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
require('dotenv').config()

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true  }).then(()=>{
    console.log("Database is connected succesfully");
});

const routes = require('./routes')

app.use('/', routes)

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));

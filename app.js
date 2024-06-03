const express = require('express');
const mongoose = require('mongoose');
const config = require("./config/config.json");
const db = require("./config/database.json");

const url = `mongodb://${db.development.host}:${db.development.port}/${db.development.database}`;

// mongodb://localhost:27017/
mongoose.connect(url);
// mongoose.connection.on((err),("err")=>{})

const app = express();
app.use(express.json());

app.listen((port = config.port ), () => console.log(`server is running http://localhost:${ config.port }`));





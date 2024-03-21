const express = require("express");
require('dotenv').config();
const cors = require('cors');
const dbconn = require("./config/dbconn");
const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbconn();
const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log("server runing 5000 ", +PORT);
});

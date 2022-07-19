const express = require("express");
const mongoose = require("mongoose");
const notesRouter = require("./routes/notes");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

mongoose.connect("mongodb://localhost:27017/noteDB");

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use("/notes", notesRouter);












app.listen(4000, function(){
    console.log("Server is running.");
});
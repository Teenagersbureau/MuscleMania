const http = require("http");
const express = require("express");
const port = 3001;
const hostname = "127.0.0.1";
const path = require("path");
const servefavicon = require("serve-favicon")
const app = express();
const mongoose = require("mongoose");
app.use(servefavicon(path.join(__dirname, 'images', 'favicon.ico')))
// Mongo specific stuff

// connecting to mongodb database
mongoose.connect('mongodb://127.0.0.1:27017/contactgym', { useNewUrlParser: true, useUnifiedTopology: true });

// checking for a succesfull connection established or not
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connection established to database!!");
});

//Defining Schema
const gymschema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    query: String,
    termscheck: String,
    age: String
})

//Creating model of the schema
const gymmodel = mongoose.model('gymuser', gymschema);

//Express specific stuff 
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

//Pug specific stuff
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
//Endpoint handling via express

app.get("/", (req, res) => {
    res.status(200).render("home.pug");
})

app.get("/services", (req, res) => {
    res.status(200).render("services.pug");
})

app.get("/trainers", (req, res) => {
    res.status(200).render("trainers.pug");
})

app.get("/contact", (req, res) => {
    res.status(200).render("contact.pug");
})


//Creating a new object corresponding to the model on post request and saving the data rececived from the body requested from. The data is then saved and executes a promise funcion for rendering either succesfull or unsuccesfull saving of data.
app.post("/contact", (req, res) => {
    const data = new gymmodel(req.body);
    data.save().then(() => {
        res.status(200).render("output.pug")
    }).catch(() => {
        res.status(400).send("Error 400. Data not saved. Please try again later");
    })

})

//Running app 

app.listen(port, hostname, () => {
    console.log(`Running on  and ${hostname}:${port}`)
})
const express = require("express");


const date = require(__dirname + "/date.js"); // requiring own local module which is in the same directory 

const app = express();

app.set('view engine', 'ejs'); //setting ejs viewengine 
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public')); // for using local static files like css js and images files
let notes = [];

let workItems = [];

let note;

app.get("/", (req, res) => {

    let day = date.getDay();

    res.render("index", { title: day, listItems: notes });

});

app.post("/", (req, res) => {

    note = req.body.note;

    let list = req.body.list;
    if (list === "work") {
        if (note != "") {
            workItems.push(note);

        } else {

        }
        res.redirect("/work");

    } else {
        if (note != "") {
            notes.push(note);

        } else {

        }
        res.redirect("/");
    }


});

app.get("/work", (req, res) => {
    res.render("index", { title: "work", listItems: workItems })
});



app.listen(3000, () => {
    console.log("server is listening on port 3000 ");
})
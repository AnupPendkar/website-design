const express = require("express");
const path = require("path");
const User = require("./models/contactSchema");
require("./db/conn");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 3000;


// setting the path
const staticpath = path.join(__dirname, "../public");
const viewspath = path.join(__dirname, "../templates/views");
const partialspath = path.join(__dirname, "../templates/partials");


// middleware
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jquery', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.static(staticpath));
app.use(express.urlencoded({extended:false}));

app.set("view engine", "hbs");
app.set("views", viewspath);
hbs.registerPartials(partialspath);


// routing
app.get("/",(req, res)=>{
    res.render("index.hbs");
})
app.post("/contact",async(req, res)=>{
    try {
        // res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index");
    } catch (error) {
        res.status(500).send(error);
    }
})


// server create
app.listen(port, ()=>{
    console.log(`server is running at port ${port}`);
})

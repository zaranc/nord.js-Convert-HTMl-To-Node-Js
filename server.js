
console.log(__dirname);

let http = require("http");
let express = require("express");
let bodyParser = require("body-parser");
const { name } = require("ejs");
let connectDB = require("./db/connectDB");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");



app.get("/", (req, res) => {
    res.render("index", { name });
});


app.post("/create-user", (req, res) => {
    try {
      console.log(req.body);
  
      let { name } = req.body;
      console.log(name);
  
      res.render("index",{ name});
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
});
  


//db connection
connectDB();

//https server
http.createServer(app).listen(3001, () => {
    console.log("server started");
});


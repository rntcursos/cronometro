const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index")
});

app.listen(PORT, function(){
    console.log("App rodando na porta: " + PORT)
})
// Impor MySQL connection
var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res){
  burger.selectAll(function(data){
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function(req, res){
  console.log("burgers_controller.js burger_name is: " + req.body.burger_name);
  burger.insertOne (
    req.body.burger_name,
    function(){
      res.redirect("/burgers");
  });
});

router.put("/burgers/update/:id", function(req, res){

  burger.updateOne(
    req.params.id,
    function(){
      res.redirect("/burgers");
  }); 
});

//Exports routes for server.js to use
module.exports = router;
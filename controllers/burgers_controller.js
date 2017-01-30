var express = require("express");
var router = express.Router();

var db = require("../models");

// Create all routes + set up logic within those routes where required.
router.get("/", function(req, res){
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res){
  db.burgers.selectAll({})
    .then(function(dbBurger){
      res.render("index", {
        burgers: dbBurger 
      });
  });
});

router.post("/burgers/create", function(req, res){
  db.burgers.createe({
    burger_name: req.body.burger_name
  })
    .then(function(dbBurger){
      res.redirect("/burgers");
  });
});

router.put("/burgers/update/:id", function(req, res){

  db.burgers.updateOne(req.body,{
    where: {
      id: req.params.id
    }
  })
  .then(function(dbBurger){
    res.redirect("/burgers");
  });
  }); 

//Exports routes for server.js to use
module.exports = router;
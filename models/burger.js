var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb)
{
    orm.selectAll("burgers", function (res) {
        var data = res;
        console.log(data);
        cb(res);
    });
},

    insertOne: function(burger_name, cb) {
        orm.insertOne(burger_name, function(res){
            cb(res);
            console.log(res);
        });
    },

    updateOne: function(id, cb){
        orm.updateOne(id, function(res){
            cb(res);

        });
    }

};

// Export the orm object for the model (burger.js)
module.exports = burger;
// Import MySQL connection
var connection = require("../config/connection.js");

// Object for all SQL statement functions
var orm = {
    selectAll: function(table_name, cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, [], function (error, result){
            if (error) {
                throw error;
            }
            console.log(result);
            cb(result);
        });
    },

    insertOne: function(burger_name, cb){
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        console.log(queryString);

        connection.query(queryString, [burger_name], function(error, result){
            if (error){
                throw error;
            }
            console.log("result is " + result)
            cb(result);
        });
    },

    updateOne: function(id, cb){
        var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ?";
        
        console.log(queryString);

        connection.query(queryString, [id], function(error, result){
            if (error){
                throw error;
            }
            cb(result);
        });
    }
};

// Export the orm object for the model (burger.js)
module.exports = orm; 
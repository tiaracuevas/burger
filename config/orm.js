var connection = require("./connection.js")

//var tableName = "burgers";

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}


    var orm = {
        all: function (tableName, callback) {
            var queryString = "SELECT * FROM " + tableName + ";";

            connection.query(queryString, function (err, result) {
                if (err) {
                    throw err;
                }
                callback(result);
            });
        },

        create: function (tableName, cols, vals, callback) {
            var queryString = "INSERT INTO " + tableName + " (" + cols.toString() + ") " + " VALUES (" + vals + ")"
            console.log(queryString);
            connection.query(queryString, vals, function (err, result) {
                if (err) {
                    throw err;
                }
                callback(result);
            });
        },

        update: function (tableName, vals, condition, callback) {
            var queryString = "UPDATE " + tableName + " SET " + objToSql(vals) + " WHERE " + condition
            console.log(queryString)
            connection.query(queryString, function (err, result) {
                if (err) {
                    throw err
                }
                callback(result);
            });
        },
        delete: function (table, condition, cb) {
            var queryString = "DELETE FROM " + table;
            queryString += " WHERE ";
            queryString += condition;

            connection.query(queryString, function (err, result) {
                if (err) {
                    throw err;
                }

                cb(result);
            });
        }

    }
    module.exports = orm;
var express = require('express');
var request = require('request');
var mysql = require('mysql');
var connection = connectToDatabase('myHost', 'myUser', 'myPassword', 'myDatabase');

var app = express();

app.use(express.static('public'));

app.get('/backend-info', (req, res, next) => {
    res.send({'info' : JSON.stringify(process.env.ORA_INSTANCE_NAME)});
});

 for (int i = 0; i < 10; i++) {
          runGetRequest(i);
        }

//runDatabaseQuery();

// Does a GET request to ip.jsontest.com
function runGetRequest(i) {
    
    //sample URL.
    var url = "http://129.144.148.225:3000/fighters/45/" + i + "/white/nodefighteruser01";
    request(url, function(error, response, body) {
        if(!error) {
            console.log(body);
        } else {
            console.log(error);
        }
    });
};

//Executes a SQL query
function runDatabaseQuery() {
    connection.query("SELECT * FROM SampleTable", function(error, rows, fields) {
        if(!error) {
            console.log(rows);
        } else {
            console.log(error);
        }
    });
};

// Returns a connection object to the database.
function connectToDatabase(host, user, password, database) {
    var connectionJson = {
        host: host,
        user: user,
        password: password,
        database: database,
        timezone: 'utc'
    };
    return mysql.createConnection(connectionJson);
};

module.exports = app;

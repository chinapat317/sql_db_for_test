var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  port: "/var/run/mysqld/mysqld.sock"
});

const DB = "pentest"
const TABLE = "random_num"

async function connectDB() {
    await con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
}

async function queryDB(request) {
    var sql = "SELECT rand FROM " + DB + "." + TABLE + " WHERE id=" + request.params['id']
    await con.query(sql, function (err, result) {
        if (err){
            console.log(err)
            response.send(err)
        }
        console.log(JSON.stringify(result))
        response.send(result)
    });
}

async function queryStr(request) {
    var sql = request.params['query_str']
    await con.query(sql, function (err, result) {
        if (err){
            console.log(err)
            response.send(err)
        }
        console.log(JSON.stringify(result))
        response.send(result)
    });
}

module.exports = {connectDB, queryDB, queryStr};

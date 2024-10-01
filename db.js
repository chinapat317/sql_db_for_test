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
    var sql = "USE " + DB + " SELECT * FROM " + TABLE + " WHERE id=" + request.params['id'] + ";"
    await con.query(sql, function (err, result) {
        return result
    });
}

async function queryStr(request) {
    var sql = request.params['query_str']
            await con.query(sql, function (err, result) {
                return result
            });
    return err 
}

module.exports = {connectDB, queryDB, queryStr};

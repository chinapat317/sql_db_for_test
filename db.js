var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin"
});

const DB = "pentest"
const TABLE = "random_num"

async function connectDB(request) {
    await con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
    sql = "USE " + DB + " SELECT * FROM " + TABLE + " WHERE id=" + request.params['id'] + ";"
    await con.query(sql, function (err, result) {
        request.response(result)
    })
}

module.exports = {connectDB};

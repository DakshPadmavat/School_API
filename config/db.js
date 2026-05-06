const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "mysql.railway.internal",
    port: 3306,
    user: "root",
    password: "DxBPgXpKZuoTKKvZEnMsuFfJSbLCbiCt",
    database: "railway"
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected...");
});

module.exports = db;
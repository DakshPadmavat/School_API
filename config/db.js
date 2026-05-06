const mysql = require("mysql2");

const db = mysql.createConnection({
    host: mysql.railway.internal,
    port: 3306,
    user: root,
    password: DxBPgXpKZuoTKKvZEnMsuFfJSbLCbiCt,
    database: railway,
    ssl: {
        rejectUnauthorized: false
    }
});

db.connect(err => {
    if (err) {
        console.error("DB Error:", err.message);
        return; // prevents crash
    }
    console.log("MySQL Connected...");
});

module.exports = db;
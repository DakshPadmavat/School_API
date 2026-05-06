const mysql = require("mysql2");

const db = mysql.createConnection({
    uri: "mysql://root:DxBPgXpKZuoTKKvZEnMsuFfJSbLCbiCt@switchyard.proxy.rlwy.net:23565/railway",
    ssl: {
        rejectUnauthorized: false
    }
});

// Connect to DB
db.connect((err) => {
    if (err) {
        console.error("❌ DB Connection Error:", err);
        return;
    }
    console.log("✅ MySQL Connected");
});

module.exports = db;
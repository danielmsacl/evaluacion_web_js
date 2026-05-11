const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "10.32.0.78",
    user: "root",
    password: "admin",
    database: "evaluacion_web",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;

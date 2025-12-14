const mysql = require('mysql2'); 


const db = mysql.createConnection({
    host: 'localhost',
    user: 'wpr',             
    password: 'fit2024',      
    database: 'wpr2201140075' 
});


module.exports = db;

'use strict';
const mysql = require('mysql');

//phpmyadmin Host
const conn = mysql.createConnection({
  host     : 'localhost',
  port: 3306,
  user     : 'root',
  password : '',
  database : 'node_crud'
});
conn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = conn;
const express = require('express');
const mysql = require('mysql'); 
const app = express();
const port =  3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
};
const connection = mysql.createConnection(config);
const createTable = `CREATE TABLE IF NOT EXISTS people (id integer auto_increment, name VARCHAR(255), PRIMARY KEY  (id))`;
connection.query(createTable);

app.get('/', (req, res) => {
  const sql = `INSERT INTO people(name) VALUES ('Matheus')`;
  connection.query(sql);
  const selectQuery = `SELECT name FROM people`;
  var namesList = '';
  connection.query(selectQuery, (err, result, fields) => {
    if (err) throw err;
    Object.keys(result).forEach((key) => {
      var row = result[key];
      namesList+=`<li>${row.name}</li>`
    })
    res.send(`<h1>Full Cycle Rocks!</h1><lu>${namesList}</lu>`);
  });
});

app.listen(port, () => {
  console.log('Rodando na porta ' + port);
})
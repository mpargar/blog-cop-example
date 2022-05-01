const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "blog",
});

const query = (query) => {
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(`Error executing ${query}`);
      resolve(results);
    });
  });
};

module.exports = {
  query,
};

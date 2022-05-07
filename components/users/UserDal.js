const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE_DB,
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

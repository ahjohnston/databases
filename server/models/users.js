var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryStr = 'SELECT * FROM users';
    db.connection.query(queryStr, (err, result) {
      if (err) {
        callback(err,null);
      } else {
        callback(null, result);
      };
    })
  },
  create: function (callback) {
    var queryStr = 'INSERT INTO users(username) values (?)';
    db.connection.query(queryStr, (err, result) => {
      if (err) {
        callback(err, null) ;
      } else {
        callback(null, result);
      }
    })
  }
};

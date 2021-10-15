var db = require('../db');
//the method in db is called "connection" (it creates a connection with the server)

module.exports = {
  getAll: function (callback) {
    var queryStr = 'SELECT messages.id, messages.msg FROM messages \
    left outer join users on (messages.userid = users.id) \
    order by messages.id desc';
    db.connection.query(queryStr, function (err, results) {
      if (err){
        callback(err, null);
      } else {
        callback(null, results);
      }
    });

  }, // a function which produces all the messages
  create: function (callback) {
    var queryStr = 'INSERT INTO messages(test, userid, roomname) \
    values (text, (SELECT id FROM users WHERE username = ? limit 1), roomname';
    db.connection.query(queryStr, (err, results) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  } // a function which can be used to insert a message into the database
};

var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, results) => {

  res.json(results);
}

  }, // a function which handles a get request for all messages

  //the router has sent me to the /messages path
  //now that I'm there, I need to get the messages by invoking models.messages.js
  //how do I pass in req & res ?

  post: function (req, res) {
    var parameters = [req.body[text], req.body[username], req.body[roomname]]
    models.messages.post(parameters, (err, result) => {
      res.json(results);
    })
  } // a function which handles posting a message to the database
};

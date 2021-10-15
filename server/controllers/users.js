var models = require('../models');

module.exports = {
  get: function (req, res) {},
  post: function (req, res) {
    var parameters = req.body[username];
    models.messages.post(parameters, (err, result) => {
      res.json(results);
    });
  }
};

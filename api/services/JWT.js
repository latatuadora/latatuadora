var jsonWebToken = require('jsonwebtoken');
var moment = require('moment');
var constants = require('../Constants');
module.exports = {
  createToken: function (user, done) {
    const payload = {
      sub: user.id,
      typ: user.userType,
      iat: moment().unix(),
      exp: moment().add(7, 'days').unix()
    };
    return jsonWebToken.sign(payload, constants.SECRET_TOKEN);
  },
  verifyToken: function (token, done) {
    jsonWebToken.verify(token, constants.SECRET_TOKEN, function (err, decoded) {
      if (err) {
        return done(err);
      } else {
        return done(null, decoded);
      }
    });
  }
};

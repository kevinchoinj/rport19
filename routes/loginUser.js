const {secret} = require('../jwtConfig');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const nano = require('nano')('http://localhost:5984');
const authDatabase = nano.db.use('passport');

module.exports = app => {
  app.post('/loginUser', (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        res.status(400).send({
          success: 'false',
          message: info.message,
        });
      } else {
        req.logIn(user, err => {
          authDatabase.view('data', 'username', { key: user.username, include_docs: true }, (err, body) => {
            const token = jwt.sign(
              { id: body.rows[0].value.username},
              secret,
              {expiresIn: '168h'}
            );
            res.status(200).send({
              auth: true,
              username: body.rows[0].value.username,
              token: token,
              message: 'user found & logged in',
            });
          });
        });
      }
    })(req, res, next);
  });
};
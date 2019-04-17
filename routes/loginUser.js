import jwtSecret from '../jwtConfig';
import jwt from 'jsonwebtoken';
import passport from 'passport';

const {
  couchGet,
} = require('../couch');

module.exports = app => {
  app.post('/loginUser', (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        res.send(info.message);
      } else {
        req.logIn(user, err => {
          couchGet('passport', `_design/data/_view/data?key=\"${user.username}"&include_docs=true`)
          .then(data => {
            const token = jwt.sign(
              { id: data.data.rows[0].value.username},
              jwtSecret.secret,
              {expiresIn: '168h'}
            );
            res.status(200).send({
              auth: true,
              token: token,
              message: 'user found & logged in',
            });
          });
        });
      }
    })(req, res, next);
  });
};
const {
  updateDatabase,
} = require('../couch');

import passport from 'passport';

module.exports = app => {
  app.post('/registerUser', (req, res, next) => {
    console.log(req.body);
    passport.authenticate('register', (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        res.send(info.message);
      } else {
        req.logIn(user, err => {
          const data = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            username: req.body.username,
          };
          updateDatabase('passport', `_design/data/_view/data?key=\"${data.username}"&include_docs=true`, {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
          })
          .then(() => {
            console.log('user created in db');
            res.status(200).send({ message: 'user created' });
          });
        });
      }
    })(req, res, next);
  });
};

//couchGet('passport', `_design/data/_view/data?key=\"${data.username}"&include_docs=true`)
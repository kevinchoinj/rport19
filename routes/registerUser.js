const passport = require('passport');
const nano = require('nano')('http://localhost:5984');
const authDatabase = nano.db.use('passport');

module.exports = app => {
  app.post('/registerUser', (req, res, next) => {
    passport.authenticate('register', (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info);
        res.send(info.message);
      } else {
        req.logIn(user, err => {
          const data = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            username: req.body.username,
          };
          authDatabase.view('data', 'username', { channelType: channelName, include_docs: true })
          .then(body => {
            if (body.rows[0]) {
              return authDatabase.insert({
                _id: body.rows[0].doc._id,
                _rev: body.rows[0].doc._rev,
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
              });
            }
            else {
              return authDatabase.insert({
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
              });
            }
          })
          .then(() => {
            console.log('user created in db');
            res.status(200).send({ message: 'user created' });
          })
        });
      }
    })(req, res, next);
  });
};

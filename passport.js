const bcrypt = require('bcryptjs');
const {secret} = require('./jwtConfig');
const nano = require('nano')('http://localhost:5984');
const authDatabase = nano.db.use('passport');

const BCRYPT_SALT_ROUNDS = 12;

const passport = require('passport'),
  localStrategy = require('passport-local').Strategy,
  JWTstrategy = require('passport-jwt').Strategy,
  ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
  'register',
  new localStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      session: false,
    },
    (username, password, done) => {
      try {
        authDatabase.view('data', 'username', { key: username, include_docs: true }, (err, body) => {
          console.log(body);
            if (body.rows[0] && body.rows[0].value) {
              return done(null, false, { message: 'username already taken' });
            }
            else {
            bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
              authDatabase.insert({
                username: username,
                password: hashedPassword,
              })
              .then(user => {
                console.log('user created');
                // note the return needed with passport local - remove this return for passport JWT to work
                //return done(null, user);
              });
            });
          }
        });
      } catch (err) {
        done(err);
      }
    },
  ),
);

passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      session: true,
    },
    (username, password, done) => {
      try {
        authDatabase.view('data', 'username', { key: username, include_docs: true }, (err, body) => {
          if (body && (!body.rows[0] || !body.rows[0].value)) {
            //goes to loginUser.js
            return done(null, false, { message: 'bad username or password' });
          } else {
            bcrypt.compare(password, body.rows[0].value.password).then(response => {
              if (response !== true) {
                console.log('passwords do not match');
                return done(null, false, { message: 'passwords do not match' });
              }
              console.log('user found & authenticated');
              // note the return needed with passport local - remove this return for passport JWT
              return done(null, body.rows[0].value);
            });
          }
        });
      } catch (err) {
        done(err);
      }
    },
  ),
);

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: secret,
};

passport.use(
  'jwt',
  new JWTstrategy(opts, (jwt_payload, done) => {
    try {
      authDatabase.view('data', 'username', { key: jwt_payload.id, include_docs: true }, (err, body) => {
        if (body) {
          console.log('user found in db in passport');
          // note the return removed with passport JWT - add this return for passport local
          done(null, body.rows[0].value);
        }
        else {
          console.log('user not found in db');
          done(null, false);
        };
      });
    } catch (err) {
      done(err);
    }
  }),
);
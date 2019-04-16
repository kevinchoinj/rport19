import jwtSecret from './jwtConfig';
import bcrypt from 'bcrypt';

const BCRYPT_SALT_ROUNDS = 12;

const passport = require('passport'),
  localStrategy = require('passport-local').Strategy,
  JWTstrategy = require('passport-jwt').Strategy,
  ExtractJWT = require('passport-jwt').ExtractJwt;

const {
  couchGet,
  couchPost,
} = require('./couch');

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
        couchGet('passport', `_design/data/_view/data?key=\"${username}"&include_docs=true`)
        .then(data => {
          if (data.data.rows[0] != null) {
            console.log('username already taken');
            return done(null, false, { message: 'username already taken' });
          } else {
            bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
              couchPost('passport', {
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
      session: false,
    },
    (username, password, done) => {
      try {
        couchGet('passport', `_design/data/_view/data?key=\"${username}"&include_docs=true`)
        .then(data => {
          if (data.data.rows[0] === null) {
            return done(null, false, { message: 'bad username' });
          } else {
            bcrypt.compare(password, data.data.rows[0].value.password).then(response => {
              if (response !== true) {
                console.log('passwords do not match');
                return done(null, false, { message: 'passwords do not match' });
              }
              console.log('user found & authenticated');
              // note the return needed with passport local - remove this return for passport JWT
              return done(null, data.data.rows[0].value);
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
  secretOrKey: jwtSecret.secret,
};

passport.use(
  'jwt',
  new JWTstrategy(opts, (jwt_payload, done) => {
    try {
      couchGet('passport', `_design/data/_view/data?key=\"${jwt_payload.id}"&include_docs=true`)
      .then(data => {
        if (data.data.rows[0]) {
          console.log('user found in db in passport');
          // note the return removed with passport JWT - add this return for passport local
          done(null, data.data.rows[0].value);
        } else {
          console.log('user not found in db');
          done(null, false);
        }
      });
    } catch (err) {
      done(err);
    }
  }),
);
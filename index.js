import express from 'express';
import path from 'path';
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser';
import router from './routes/index.js';
import passport from 'passport';

const app = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(router);

require ('./passport');
require('./routes/loginUser')(app);
require('./routes/registerUser')(app);
require('./routes/findUser')(app);
//require('./routes/deleteUser')(app);
//require('./routes/updateUser')(app);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/static', express.static('public'));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});
const port = process.env.PORT || 5000;

app.listen(port, function(){
  console.log(`server is running on port ${port}`)
})


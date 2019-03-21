const {
  couchPost,
} = require('./couch.js');

const json = require('./config.json');
const dbErrors = json.dbErrors;

const sendError = (component, error, text) => {
  couchPost(dbErrors, {
    app: 'rport19',
    component: component,
    error: error,
    text: text,
  });
};

module.exports = {
  sendError,
};
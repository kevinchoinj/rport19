const {
  getCouch,
  sendError,
} = require('./couch');

const checkCouch = (dbName, viewName, viewMap) => {
  getCouch().listDatabases()
    .then(
      dbs => {
        if (!dbs.includes(dbName)) {
          createDatabase(dbName, viewName, viewMap);
          console.log(`creating ${dbName}`)
        }
        else {
          console.log(`${dbName} already exists.`)
        }
      },
      err => {
        sendError('Check Couch', 'error', err);
      });
};

const createDatabase = (dbName, viewName, viewMap) => {
  getCouch().createDatabase(dbName)
    .then(() => {
      getCouch().insert(dbName, {
        _id: `_design/${viewName}`,
        'views': {
          [viewName]: {
            'map': viewMap,
          }
        },
      });
    },
    err => {
      sendError('Create CouchDB Database', 'error', err);
    });
};

module.exports = {
  checkCouch,
};
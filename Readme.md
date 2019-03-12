# Shodyra Portfolio 2019
Portfolio accessible at https://shodyra.com/

## Necessary Files

config.json, client/src/config.json, client/src/fire.js should be filled in with corresponding data of config_example.json, client/src/config_example.json, and client/src/fire_example.js

CouchDB is manually set up to create a local database with a view to store AWS S3 data.

https://s3.console.aws.amazon.com

http://couchdb.apache.org/

## Getting Started

Install packages for both Express server and React client then run both

**Server**
```
npm install
npm start
```

**Client**
```
npm install
npm start
```

**Firebase**

https://console.firebase.google.com/u/0/?pli=1
```
Project settings
Your Apps
</>
Copy config data from web app popup to fire.js
Authentication
Sign-in-method
Email/Password: Enabled
```

To create administrative account, insert RegistrationForm in react client to replace LoginForm to create new firebase account then replace with LoginForm afterward. Corresponding email goes in client/src/config.json.
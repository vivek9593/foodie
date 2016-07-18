var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'Zomato API'
    },
    port: 5000,
    // db: 'mongodb://localhost/equinox',
    //REFRESH_THRESHOLD:1000*60*2
    REFRESH_THRESHOLD:1000*60*1
  },

  test: {
    root: rootPath,
    app: {
      name: 'zomatoApi'
    },
    port: 5000,
    // db: 'mongodb://localhost/equinox',
    REFRESH_THRESHOLD:1000*60*10
  },

  production: {
    root: rootPath,
    app: {
      name: 'zomatoApi'
    },
    port: 5000,
    // db: 'mongodb://localhost/equinox',
    REFRESH_THRESHOLD:1000*60*10
  }
};
console.log("Env=%s",env)
console.log(config[env])
module.exports = config[env];

const config = require('./config.json');

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: config.dbFilePath,
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: config.dbName,
      user: config.dbUser,
      password: config.dbPassword,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: config.dbName,
      user: config.dbUser,
      password: config.dbPassword,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

};

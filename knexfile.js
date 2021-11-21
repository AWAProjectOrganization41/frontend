// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    host: 'ec2-54-220-243-77.eu-west-1.compute.amazonaws.com',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tablename: 'knex_migrations',
      directory: "./migrations"
    }
  }

};

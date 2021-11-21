const dbEngine = process.env.DB_ENVIROMENT;
const config = require("./knexfile")[dbEngine];

module.exports = require("knex")(config);
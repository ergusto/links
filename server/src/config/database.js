require('dotenv').config();

const { DATABASE_USER, DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT } = process.env;

module.exports = {
  "development": {
    "username": DATABASE_USER,
    "password": DATABASE_PASSWORD,
    "database": DATABASE_NAME,
    "host": DATABASE_HOST,
	"port": DATABASE_PORT,
    "dialect": "postgres",
    "operatorsAliases": false,
	"logging": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  }
}

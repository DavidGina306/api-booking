const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    endpoint: process.env.DB_HOST,
    masterKey: process.env.API_KEY,
    port: process.env.PORT,
};
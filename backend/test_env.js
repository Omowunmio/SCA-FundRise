const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Verify environment variables
console.log('DB_CONNECTION:', process.env.DB_CONNECTION);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);
console.log('DB_DATABASE:', process.env.DB_DATABASE);
console.log('PORT:', process.env.PORT);
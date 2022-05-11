const dotenv = require('dotenv');
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

// console.log(`PROD VALUE: ${process.env.TEST}`);
console.log(`DEV VALUE: ${process.env.DEPLOY_SECRET}`);
console.log('nodemon another test...');
console.log(`${process.env.NODE_ENV}`);
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const port = process.env.PORT || 7777;
app.set('port', port);

const server = app.listen(app.get('port'), () => {
    console.log(`Express server is running on PORT: ${server.address().port}`);
});
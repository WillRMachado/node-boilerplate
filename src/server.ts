const app = require('./app');
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')


// Helmet helps you secure your Express apps by setting various HTTP headers
app.use(helmet());
app.use(helmet.hsts({
    maxAge: 31536000,
    includeSubdomains: true
}));

// Enable cors for all routes and origins
app.use(cors());

console.log('server online')


app.listen(3333);






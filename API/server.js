const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config()

const PORT = process.env.PORT || 9999;
const mongoURI = process.env.MONGO_URI

const serverURI = 'http://localhost:' + PORT

app.listen(PORT, () => console.log('Server running at:' + serverURI))

mongoose
    .set('useCreateIndex', true)
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => console.log('connected to database'))

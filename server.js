const express = require('express');
const config = require('config');
const mongose = require('mongoose');
const server = express();

const PORT = config.get('port') || 5000;

server.use('/api/auth', require('./routes/auth.routes'));

mongose.set('strictQuery', false)

async function start() {
    try {
        await mongose.connect(config.get('mongoUrl'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        })
    } catch (error) {
        console.log(error.message);
        
    }
}

server.listen(PORT, () => {
    console.log(`Server started ${PORT}`);
})

start();
const Faker = require('@faker-js/faker');
const messages = require('../database/db');

exports.getMessages = (ctx) => new Promise((resolve, reject) => {
    try {
    const result =  {
        status: 'ok',
        timestamp: +new Date,
        messages: messages,
    }
    resolve(result);
    }
    catch(err) {
        reject(err);
    }
    
});

function generateNumber(n = 5) {
    return Math.floor(Math.random() * n +1);
}
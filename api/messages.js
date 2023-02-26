const Faker = require('@faker-js/faker');
const msgArr = require('../database/db');

exports.getMessages = (ctx) => new Promise((resolve, reject) => {
  try {
    const result = {
      status: 'ok',
      timestamp: Number(new Date()),
      messages: msgArr,
    };
    resolve(result);
  } catch (err) {
    reject(err);
  }
});

function generateNumber(n = 5) {
  return Math.floor(Math.random() * n + 1);
}

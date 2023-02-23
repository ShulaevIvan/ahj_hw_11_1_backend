const Faker = require('@faker-js/faker');

exports.getMessages = (ctx) => new Promise((resolve, reject) => {
    try {
        Faker.faker.locale = 'ru';
        const messagesCount = Number(generateNumber());
        const messages = [];
        for (let i = 0; i < messagesCount; i++) {
            let userEmail = Faker.faker.internet.email();
            const userMessage = {
                id: Faker.faker.random.uuid,
                from: userEmail,
                subject: `hello from ${userEmail.replace(/@\w+\.\w+$/, '')}`,
                body: Faker.faker.lorem.paragraphs(number = generateNumber(3), string = '\n'),
                received: +Faker.faker.date.recent(),
        }
        messages.push(userMessage);
    }
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
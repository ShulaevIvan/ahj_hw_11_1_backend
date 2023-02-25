const Faker = require('@faker-js/faker');

class Database {
    constructor() {
        this.messages = [];
        this.generateNumber = this.generateNumber.bind(this);
        this.messagesInterval = () => {
            this.count = Number(this.generateNumber());
            this.generateMessages(this.count);
        }
    }

    generateMessages(count) {
        const messagesCount = count;
        let number = 0;
        let string = '';
        Faker.faker.locale = 'ru';
        for (let i = 0; i < messagesCount; i++) {
            let userEmail = Faker.faker.internet.email();
            const userMessage = {
                id: Faker.faker.random.uuid,
                from: userEmail,
                subject: `hello from ${userEmail.replace(/@\w+\.\w+$/, '')}`,
                body: Faker.faker.lorem.paragraphs(number = this.generateNumber(Math.random() * 3 | 1), string = '\n'),
                received: +Faker.faker.date.recent(20, '2023-02-22T00:00:00.000Z'),
            }
            this.messages.push(userMessage);
        }
    }

    generateNumber(n = 1) {
        return Number(Math.floor(Math.random() * n +1));
    }

    init() {
        setInterval(this.messagesInterval, 5000)
    }
}

const db = new Database();
db.init();

module.exports = db.messages
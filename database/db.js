const Faker = require('@faker-js/faker');

class Database {
  constructor() {
    this.messages = [];
    this.generateNumber = this.generateNumber.bind(this);
    this.messagesInterval = () => {
      this.count = Number(this.generateNumber(3));
      this.generateMessages(this.count);
    };
  }

  generateMessages(count) {
    const messagesCount = count;
    let number = 0;
    let string = '';
    Faker.faker.locale = 'ru';
    for (let i = 0; i < messagesCount; i += 1) {
      const userEmail = Faker.faker.internet.email();
      const userMessage = {
        id: Faker.faker.random.uuid,
        from: userEmail,
        subject: `hello from ${userEmail.replace(/@\w+\.\w+$/, '')}`,
        // eslint-disable-next-line
        body: Faker.faker.lorem.paragraphs(number = this.generateNumber(Math.random() * 3 | 1), string = '\n'),
        received: +Faker.faker.date.recent(20, '2023-02-22T00:00:00.000Z'),
      };
      this.messages.push(userMessage);
    }
  }

  generateNumber(n = 1) {
    this.num = n;
    return Number(Math.floor(Math.random() * this.num + 1));
  }

  init() {
    setInterval(this.messagesInterval, 5000);
  }
}

const db = new Database();
db.init();

module.exports = db.messages;

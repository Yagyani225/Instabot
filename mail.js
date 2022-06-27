
const Email = require('email-templates');

const email = new Email({
  message: {
    from: '************'
  },
  transport: {
    jsonTransport: true
  }
});

email
  .send({
    template: 'mars',
    message: {
      to: '**************',
      attachments: [
        {
          filename: '*****',
          content: 'hello world!'
        }
      ]
    },
    locals: {
      name: 'Elon'
    }
  })
  .then(console.log)
  .catch(console.error);

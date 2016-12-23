let messages = {
  sent: [
    {to: "eevee@fpm.com",
     subject: "I love you!",
     body: "My fluffy puppy muffin. :)"},
    {to: "kenzie@sisterface.com",
     subject: "You're old",
     body: "I can't believe you turn 30 soon!"}
  ],
  inbox: [
    {from: "kenzie@sisterface.com",
     subject: "RE: You're old",
     body: "LOL thanks...jerk."},
    {from: "eevee@fpm.com",
     subject: "Hi, Mom!",
     body: "Sending love from Florida! <3"}
  ]
};

const MessageStore = {
  getInboxMessages() {
    return messages.inbox.slice();
  },

  getSentMessages() {
    return messages.sent.slice();
  }
};

module.exports = MessageStore;

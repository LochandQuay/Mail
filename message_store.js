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
  },

  getMessageDraft() {
    return messageDraft;
  },

  updateDraftField(field, value) {
    messageDraft[field] = value;
  },

  sendDraft() {
    messages.sent.push(messageDraft);
    messageDraft = new Message();
  }
};

class Message {
  constructor (from, to, subject, body) {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.body = body;
  }
}

let messageDraft = new Message();


module.exports = MessageStore;

const MessageStore = require("./message_store.js");

module.exports = {
  render() {
    let div = document.createElement("div");
    div.className = "new-message";
    div.innerHTML = this.renderForm();
    div.addEventListener("change", (event) => {
      let element = event.target;
      MessageStore.updateDraftField(element.name, element.value);
    });
    div.addEventListener("submit", (event) => {
      event.preventDefault();
      MessageStore.sendDraft();
      window.location.hash = "#inbox";
    });
    return div;
  },

  renderForm(message) {
    let draft = MessageStore.getMessageDraft();
    let html = draft.innerHTML =
      `<p class="new-message-header">New Message</p>
      <form class="compose-form">
        <input
          placeholder="Recipient"
          name="to"
          type="text"
          value="${draft.to}">
        <input
          placeholder="Subject"
          name="subject"
          type="text"
          value="${draft.subject}">
        <textarea name="body" rows=20>${draft.body}</textarea>
        <button
          type="submit"
          class="btn btn-primary submit-message">
          Send
        </button>
      </form>`;
    return html;
  }
};

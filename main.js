let Router = require('./router.js');
let Inbox = require('./inbox.js');
// let Compose = require('./compose.js');
// let Sent = require('./sent.js');

document.addEventListener("DOMContentLoaded", () => {
  let content = document.querySelector(".content");
  let router = new Router(content, routes);
  router.start();

  location.hash = "#inbox";

  let navItems = Array.from(document.querySelectorAll(".sidebar-nav li"));
  navItems.forEach(navItem => {
    navItem.addEventListener("click", () => {
      let name = navItem.innerText.toLowerCase();
      location.hash = name;
    });
  });
});

let routes = {
  // compose: Compose,
  inbox: Inbox//,
  // sent: Sent
};

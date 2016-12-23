/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	let Router = __webpack_require__(1);
	let Inbox = __webpack_require__(2);
	let Sent = __webpack_require__(4);
	// let Compose = require('./compose.js');

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
	  inbox: Inbox,
	  sent: Sent
	  // compose: Compose,
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	class Router {
	  constructor (node, routes) {
	    this.node = node;
	    this.routes = routes;
	  }

	  start () {
	    this.render();
	    window.addEventListener("hashchange", () => {
	      this.render();
	    });
	  }

	  activeRoute () {
	    let route = window.location.hash.substr(1);
	    let component = this.routes[route];
	    return component;
	  }

	  render () {
	    this.node.innerHTML = "";
	    let component = this.activeRoute();
	    if(component) {
	      this.node.appendChild(component.render());
	    }
	  }
	}

	module.exports = Router;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const MessageStore = __webpack_require__(3);

	module.exports = {
	  render() {
	    let ul = document.createElement("ul");
	    ul.className = "messages";
	    let messages = MessageStore.getInboxMessages();
	    messages.forEach (message => {
	      ul.appendChild(this.renderMessage(message));
	    });
	    return ul;
	  },

	  renderMessage(message) {
	    let li = document.createElement("li");
	    li.className = "message";
	    li.innerHTML = `<span class="from">${message.from}</span>
	                    <span class="subject">${message.subject}</span>
	                    <span class="body">${message.body}</span>`;
	    return li;
	  }
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	const MessageStore = __webpack_require__(3);

	module.exports = {
	  render() {
	    let ul = document.createElement("ul");
	    ul.className = "messages";
	    let messages = MessageStore.getSentMessages();
	    messages.forEach (message => {
	      ul.appendChild(this.renderMessage(message));
	    });
	    return ul;
	  },

	  renderMessage(message) {
	    let li = document.createElement("li");
	    li.className = "message";
	    li.innerHTML = `<span class="to">${message.to}</span>
	                    <span class="subject">${message.subject}</span>
	                    <span class="body">${message.body}</span>`;
	    return li;
	  }
	};


/***/ }
/******/ ]);
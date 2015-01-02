$(document).ready( function() {

  var $contentContainer = $('#content'),
      addChatToDOM,
      createChatHtml,
      loginHandler,
      signupHandler,
      submitMessageHandler,
      homePageHandler,
      getTimestamp;

  getTimestamp = function() {
    return Math.round((new Date()).getTime() / 1000);
  };

  submitMessageHandler = function(e) {

    e.preventDefault();
    Chatitude.postMessage(Interface.getMessage());
    Interface.clearMessage();

  };

  signupHandler = function() {

    var loginCreds = Interface.getLoginCreds();

    Chatitude.signIn(loginCreds, function() {
      Slider.initModule($('#menu'), loginCreds.username);
      Interface.loadChatInterface($contentContainer, submitMessageHandler);
      Chatitude.getChats(loadAllChats);
    });

  }

  createChatHtml = function(chat) {

    var source = $("#chat-template").html(),
        template = Handlebars.compile(source);

    return template(chat);

  };

  addChatToDOM = function(chat) {

    var $chatWindow = $('#chatstream'),
        chatHtml = createChatHtml(chat);

    $chatWindow.prepend(chatHtml);

  };

  loadAllChats = function(chats) {

    var numChats = chats.length,
        i;

    for(i = 0; i < numChats; i++) {
      addChatToDOM(chats[i]);
    }

  };

  loginHandler = function(e) {

    var loginCreds = Interface.getLoginCreds();

    e.preventDefault();
    if(e.data) {
      Chatitude.signUp(loginCreds, signupHandler);
      return;
    }

    Chatitude.signIn(loginCreds, function() {
      Slider.initModule($('#menu'), loginCreds.username);
      Interface.loadChatInterface($contentContainer, submitMessageHandler);
      Chatitude.getChats(loadAllChats);
    });

  };

  homePageHandler = function(e) {

    e.preventDefault();

    var isSignup = $(this).data('signup') === 1;
    Interface.loadLoginInterface($contentContainer, isSignup, loginHandler);

  };

  Interface.loadHomePage($contentContainer, homePageHandler);

});
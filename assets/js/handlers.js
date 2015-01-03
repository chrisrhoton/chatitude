$(document).ready( function() {

  var $contentContainer = $('#content'),
      addChatToDOM,
      createChatHtml,
      loginHandler,
      signupHandler,
      submitMessageHandler,
      homePageHandler,
      getTimestamp,
      loginFailHandler;

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
    }, loginFailHandler);

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

    $('#chatstream').html("");

    var numChats = chats.length,
        i;

    for(i = 0; i < numChats; i++) {
      addChatToDOM(chats[i]);
    }

    setTimeout( function() {
      Chatitude.getChats(loadAllChats);
    }, 1000);

  };

  loginHandler = function(e) {

    var loginCreds = Interface.getLoginCreds();

    e.preventDefault();
    if(e.data) {
      Chatitude.signUp(loginCreds, signupHandler, loginFailHandler);
      return;
    }

    Chatitude.signIn(loginCreds, function() {
      Slider.initModule($('#menu'), loginCreds.username);
      Interface.loadChatInterface($contentContainer, submitMessageHandler);
      Chatitude.getChats(loadAllChats);
    }, loginFailHandler);

  };

  homePageHandler = function(e) {

    e.preventDefault();
    Interface.clearErrors();

    var isSignup = $(this).data('signup') === 1;
    Interface.loadLoginInterface($contentContainer, isSignup, loginHandler);

  };

  loginFailHandler = function(e) {

    var error = e.responseText ? JSON.parse(e.responseText) : "default";

    Interface.loadHomePage($contentContainer, homePageHandler);
    Interface.clearErrors();
    Interface.displayError("I'm sorry, but there was a problem signing in.  " + Chatitude.getError(error) );

  };

  Interface.loadHomePage($contentContainer, homePageHandler);

});
var Interface = (function($) {

  var $errors = $('#errors'),
      loadChatInterface,
      loadLoginInterface,
      clearInterface, 
      getLoginCreds,
      getMessage,
      clearMessage,
      displayError,
      clearErrors,
      createInterface,
      addInterfaceToDom;

  createInterface = function(source) {

    return Handlebars.compile(source);

  };

  displayError = function(error) {

    $errors.html('<p>' + error + '</p>');

  };

  clearErrors = function() {

    $errors.html("");

  };

  getMessage = function() {

    return $("#chatInput").val();

  };

  clearMessage = function() {

    $("#chatInput").val("");

  };

  clearInterface = function(e) {

    $("#content").html("");

  };

  getLoginCreds = function() {

    return {
      username: $('#username').val(),
      password: $('#password').val()
    };

  };

  loadChatInterface = function($container, callback) {

    var chatInterface = createInterface($("#chat-interface-template").html());

    $container.html(chatInterface);
    $('.input-container').on('click', '.action-primary', callback);

  };

  loadLoginInterface = function($container, signup, callback) {

    var formVersion = signup ?  "Sign-up" : "Sign In",
        loginInterface = createInterface($("#login-template").html());

    $container.html(loginInterface({formVersion: formVersion}));
    $('.login-container').on('click', '.action-primary', signup, callback);

  };

  loadHomePage = function($container, callback) {

    var homePage = createInterface($("#homepage-template").html());

    $container.html(homePage);
    $('.login-container').on('click', '.action-primary', callback);

  };

  return {
    loadChatInterface   : loadChatInterface,
    loadLoginInterface  : loadLoginInterface,
    getLoginCreds       : getLoginCreds,
    getMessage          : getMessage,
    clearMessage        : clearMessage,
    loadHomePage        : loadHomePage,
    clearErrors         : clearErrors,
    displayError        : displayError
  };

}(jQuery));
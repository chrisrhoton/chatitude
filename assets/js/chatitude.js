var Chatitude = (function($) {

  var chatitudeBaseUrl = 'http://chat.api.mks.io/',
      getChats,
      signIn, 
      signUp,
      apiToken,
      postChat,
      setApiToken,
      postMessage;

  setApiToken = function(token) {

    apiToken = token.apiToken;

  };

  getChats = function(callback) {

    $.get(chatitudeBaseUrl + "chats", callback);

  };

  signUp = function(loginCreds, callback) {

    var handler = callback || function() {};

    $.post(chatitudeBaseUrl + "signup", loginCreds, handler);

  };

  signIn = function(loginCreds, callback) {

    $.post(chatitudeBaseUrl + "signin", loginCreds, function(token) {
      setApiToken(token); 
      callback();
    });

  };

  postMessage = function(message) {

    $.post(chatitudeBaseUrl + "chats", {apiToken: apiToken, message: message}, function(){});

  };

  return {
    getChats: getChats,
    signUp: signUp,
    signIn: signIn,
    postMessage: postMessage
  };

}(jQuery));
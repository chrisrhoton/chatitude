var Chatitude = (function($) {

  var chatitudeBaseUrl = 'http://chat.api.mks.io/',
      getChats,
      signIn, 
      signUp,
      apiToken,
      postChat,
      setApiToken,
      postMessage,
      getError;

  var errors = {
    "username_taken"  : "That username is already taken."
  };

  getError = function(response) {

    return errors[response.errors[0]] || "Unrecognized error";

  };

  setApiToken = function(token) {

    apiToken = token.apiToken;

  };

  getChats = function(callback) {

    $.get(chatitudeBaseUrl + "chats", callback);

  };

  signUp = function(loginCreds, callback, failCallback) {

    var handler   = callback || function() {},
        failFunc  = failCallback || function() { alert("I'm sorry.  There was an error signing up."); };

    $.post(chatitudeBaseUrl + "signup", loginCreds, handler)
      .fail(failFunc);

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
    getChats    : getChats,
    signUp      : signUp,
    signIn      : signIn,
    postMessage : postMessage,
    getError    : getError
  };

}(jQuery));
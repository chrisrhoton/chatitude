var Interface = (function($) {

  var loadChatInterface,
      loadLoginInterface,
      clearInterface, 
      getLoginCreds,
      getMessage,
      clearMessage;

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

    var chatInterface = '\
      <div id="chatstream" class="input-textbox"></div>\
      <div class="input-container">\
        <form>\
          <input type="text" id="chatInput" name="message" class="input-text">\
          <div class="action">\
            <input type="submit" name="submit" value="Submit" class="action-primary">\
          </div>\
        </form>\
      </div>\
    '
    $container.html(chatInterface);

    $('.input-container').on('click', '.action-primary', callback);

  };

  loadLoginInterface = function($container, signup, callback) {

    var formVersion = signup ?  "Sign-up" : "Sign In";

    var loginInterface = '\
      <div class="login-container">\
        <form>\
          <input type="text" id="username" name="username" class="input-text" placeholder="Username">\
          <input type="password" id="password" name="password" class="input-text" placeholder="Password">\
          <div class="action">\
            <input type="submit" name="submit" value="' + formVersion + '" class="action-primary">\
          </div>\
        </form>\
      </div>\
    '
    $container.html(loginInterface);
    $('.login-container').on('click', '.action-primary', signup, callback);

  };

  loadHomePage = function($container, callback) {

    var homePage = '\
      <div class="login-container">\
        <div class="homeAction">\
          <div class="action-primary" data-signup="1">Sign-Up</div>\
          <br><br>\
          <div class="action-primary" data-signup="0">Sign-In</div>\
        </div>\
      </div>\
    '
    $container.html(homePage);
    $('.login-container').on('click', '.action-primary', callback);

  };

  return {
    loadChatInterface   : loadChatInterface,
    loadLoginInterface  : loadLoginInterface,
    getLoginCreds       : getLoginCreds,
    getMessage          : getMessage,
    clearMessage        : clearMessage,
    loadHomePage        : loadHomePage
  };

}(jQuery));
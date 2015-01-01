$(document).ready( function() {

  var chatitudeBaseUrl = 'http://chat.api.mks.io/',
      loadAllChats,
      addChatToDOM,
      createChatHtml,
      username,
      apiToken,
      clearInterface,
      submitMessageHandler,
      loadChatInterface,
      loadLoginInterface,
      loginHandler;

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

  submitMessageHandler = function(e) {

    e.preventDefault();
    $("#chatInput").val("");

  };

  loadChatInterface = function() {
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
    $("#content").html(chatInterface);

    $('.input-container').on('click', '.action-primary', submitMessageHandler);

  }

  loginHandler = function(e) {

    e.preventDefault();
    console.log(e.data);

  };

  loadLoginInterface = function(signin) {

    var formVersion = signin ? "Sign In" : "Sign-up";

    var loginInterface = '\
      <div class="login-container">\
        <form>\
          <input type="text" id="username" name="username" class="input-text" placeholder="Username">\
          <br><br>\
          <input type="password" id="password" name="password" class="input-text" placeholder="Password">\
          <div class="action">\
            <input type="submit" name="submit" value="' + formVersion + '" class="action-primary">\
          </div>\
        </form>\
      </div>\
    '
    $("#content").html(loginInterface);
    $('.login-container').on('click', '.action-primary', signin, loginHandler);

  };

  clearInterface = function(e) {

    $("#content").html("");

  };

  loadLoginInterface(true);

  //$.get(chatitudeBaseUrl + "chats", loadAllChats);


});
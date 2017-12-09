// YOUR CODE HERE:

// $.get('http://parse.sfm8.hackreactor.com/chatterbox/classes/messages')

$(document).ready(function() {
  app.init();
});

var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};

var app = {};
app.server = 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages';
app.init = function () {
  // app.fetch();
  $('.username').on('click', app.handleUsernameClick);
  $('#send').on('submit', app.handleSubmit);
};

app.send = function(message) {

  $.ajax({
  // This is the url you should use to communicate with the parse API server.
    url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
    type: 'POST',
    data: message,
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

app.fetch = function() {

  $.ajax({
  // This is the url you should use to communicate with the parse API server.
    url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
    type: 'GET',
  //  data: message,
    contentType: 'application/json',
    success: function (data) {
      console.dir(data);
      console.log('chatterbox: Message sent');
      // for (var i = 0 ; i < data.results.length; i++) {
      //   app.renderMessage(data.results[i]);
      // }
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};


app.clearMessages = function() {

  $('#chats').empty();

};

app.renderMessage = function(message) {
// var message = '<div>message.username: message.text</div>''
 // $('$chats').append(message);

  
  var $chat = $('<div></div>');

  var $message = $('<div></div>');
  $message.html('<p>' + message.text + '</p>');
  $message.addClass('chat');
  
  $username = $('<div></div>');
  $username.html('<p>' + message.username + '</p>');
  $username.addClass('username');
  
  $chat.append($username);
  $chat.append($message);
  $('#chats').append($chat);
  
  $('.username').on('click', app.handleUsernameClick);
  
};

app.renderRoom = function(name) {

  var $name = $('<option>' + name + '</option>'); 
   
  $('#roomSelect').append($name);

};

app.handleUsernameClick = function() {



};

// app.renderMessage( {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// })

// $('.username').on('click', app.handleUsernameClick);

app.handleSubmit = function(event) {
  event.preventDefault();
  console.log(4);
};

// $('#send').on('submit', app.handleSubmit);

// })



var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , url = require("url")
  , fs = require('fs');

app.listen(4000);

function handler (req, res) {
  var pathname = url.parse(req.url).pathname;
  fs.readFile(__dirname + pathname,
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading client.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {
  socket.emit('init', { hello: 'world' });
  socket.on('move',function(data){
     socket.broadcast.emit('move', data);
  })
});
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/view/index.html');
});

io.on('connection', socket=>{
    console.log('a user connected');
});

http.listen(3000, ()=>{
    console.log('Listening on *:3000');
});
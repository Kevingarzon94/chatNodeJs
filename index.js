var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/view/index.html');
});

io.on('connection', socket=>{
    socket.broadcast.emit('hi');
    console.log('a user connected');
    socket.on('chat message', (msg)=>{
        io.emit('chat message', msg);
        console.log('message: ' + msg);
    })
});

io.emit('some event', {for: 'everyone'});

http.listen(port, ()=>{
    console.log('Listening on *:3000');
});
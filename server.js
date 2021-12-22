const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});



//TODO: add get queries for each user
//nightSky
app.get('/nightSky', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//Desert
app.get('/desert', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//Beach
app.get('/beach', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//Mountains
app.get('/mountains', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//Creating a new world
app.get('/addMore', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


http.listen(3000, () => {
    console.log('Connected at 3000');
});

io.on('connection', (socket) => {
    console.log('a user connected');


    //forward data
    socket.on('data', (msg) => {
        io.emit("data", msg);
    });



    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

});

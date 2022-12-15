const express = require('express');
// const cors = require('cors');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const port = 3000;

// app.use(cors());
app.use(express.json());

// routers
app.get('/test', (req, res) => {
    console.log("get test")
    res.sendFile("E:/IOT/IoT_final_Project/backend/pageFile/test.html")
})
app.get('/test2', (req, res) => {
    console.log("get test2")
    res.sendFile("E:/IOT/IoT_final_Project/backend/pageFile/test2.html")
})

app.get('/close', (req, res) => {
    io.emit('close-push-up');
    res.send('close')
})

// socket.io
io.on('connection', (socket) => {
    socket.join("push-up-game");
    console.log(socket.id+" is connected");
})



server.listen(port, () => {
    console.log("Server is up on port " + port)
})
const express = require("express");
const app = express();
const server = require("http").createServer(app)
const io = require("socket.io")(server);

const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/index.html");
});

app.get("/select_player", (req, res) => {
  res.sendFile(__dirname + "/src/select_player.html");
});

app.get("/select_mode", (req, res) => {
  res.sendFile(__dirname + "/src/select_mode.html");
});

// socket.io
io.on('connection', (socket) => {
    socket.join("push-up-game");
    console.log(socket.id + " is connected");
});

server.listen(port, () => {
  console.log("Server is up on port " + port);
});
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

app.get("/push-up", (req, res) => {
  res.sendFile(__dirname + "/src/push-up.html");
});

app.get("/plunk", (req, res) => {
  res.sendFile(__dirname + "/src/plunk.html");
});

app.get("/push-up/single", (req, res) => {
  res.sendFile(__dirname + "/src/singleTime_count.html");
});

app.get("/push-up/dual", (req, res) => {
  res.sendFile(__dirname + "/src/doubleTime_count.html");
});

app.get("/plunk/single", (req, res) => {
  res.sendFile(__dirname + "/src/singleTime_comp.html");
});

app.get("/plunk/dual", (req, res) => {
  res.sendFile(__dirname + "/src/doubleTime_comp.html");
});

app.get("/push-up/dual/end", (req, res) => {
  res.sendFile(__dirname + "/src/double_end_page_count.html");
});

// socket.io
io.on('connection', (socket) => {
    socket.join("push-up-game");
    console.log(socket.id + " is connected");
});

server.listen(port, () => {
  console.log("Server is up on port " + port);
});
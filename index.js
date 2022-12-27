const express = require("express");
const app = express();
const server = require("http").createServer(app)
const io = require("socket.io")(server);
const route = require("./router/route")
const imageRoute = require("./router/image")
const singlePushup = require("./router/single_pushUp")
const singlePlunk = require("./router/single_plunk")
const dualPushup = require("./router/dual_pushUp")
const dualPlunk = require("./router/dual_plunk")

const port = 3000;
app.use(express.json());

app.use(route);
app.use(singlePlunk);
app.use(singlePushup);
app.use(dualPlunk);
app.use(dualPushup);
app.use("/img", imageRoute);

const rooms = [{room:'room1', time: 0}, {room:'room2', time:0}, {room:'room3', time:0}, {room:'room4', time: 0}];
// socket.io
io.on('connection', async(socket) => {
  console.log(socket.id + " is connected");
  // socket.join("room");
  // console.log(io.sockets.adapter.rooms)
  socket.on("data", (data) => {
      // console.log(data)
      io.emit("distance", data);
  })

  // push up 處裡=========================================
  socket.on("push-up-start", (distance) => {
    io.emit("push-up-start", distance);
  })
  socket.on("push-up-count", (count) => {
    io.emit("push-up-count", count);
  })
  socket.on('push-up-stop', () => {
    io.emit("push-up-stop");
  })
  // =====================================================

  // plunk 處理===========================================
  socket.on("plunk-inf-challenge-start", (distance) => {
    io.emit("plunk-inf-challenge-start", distance);
  })
  socket.on("plunk-inf-challenge-stop", () => {
    io.emit("plunk-inf-challenge-stop");
  })
  socket.on("plunk-set-challenge-end", () => {
    io.emit("plunk-set-challenge-end");
  })
  // =====================================================

  // 多人push up 處理======================================
  socket.on("join-push-up", (time) => {
    // 一個room最多二人，總共有四個房間
    for(const room of rooms) {
      if(!io.sockets.adapter.rooms.get(room.room) || io.sockets.adapter.rooms.get(room.room).size < 2){
        socket.join(room.room);

        // 第二個人進來通知第一個人，並用第一個人的時間做設定
        if(io.sockets.adapter.rooms.get(room.room).size === 1){
          room.time = time
        }
        else if(io.sockets.adapter.rooms.get(room.room).size === 2){
          // 當兩人都進入房間就設定時間
          io.to(room.room).emit("set-push-up-time", room.time)
        }
        break;
      }
    }
  })
  // =====================================================

});

server.listen(port, () => {
  console.log("Server is up on port " + port);
});
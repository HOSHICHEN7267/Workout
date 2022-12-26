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

// socket.io
io.on('connection', (socket) => {
    socket.join("push-up-game");
    console.log(socket.id + " is connected");
    socket.on("data", (data) => {
        // console.log(data)
        io.emit("distance", data);
    })
});

server.listen(port, () => {
  console.log("Server is up on port " + port);
});
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());


const host = http.createServer(app);

const io = new Server(host, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    });
});


host.listen(3000, () => {
    console.log("SERVER IS RUNNING");
});

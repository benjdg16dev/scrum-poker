require("dotenv").config();

let PORT;

switch (process.env.ENV){
    case "LOCAL":
        PORT = 3000;
        break;
    case "STG":
        PORT = 4000;
        break;
    case "PROD":
        PORT = 5000;
        break;
    default:
        PORT = 3000;
};

const { instrument } = require("@socket.io/admin-ui");
// // a function that has the port that it will listen to as parameter
const io = require("socket.io")(PORT, {
    cors: ["https://admin.socket.io/", "http://localhost:8080"]
})

// // everytime someone connects with our port it will give a socket instance to that user
io.on("connection", socket => {
    console.log(socket.id);
    socket.on("submit-btn", (number, room) => {
        if (room === undefined || room === null || room.trim().length === 0) {
            // public
            socket.broadcast.emit("server-value", number);
        } else {
            // broadcast is already done with "to"
            socket.to(room).emit("server-value", number, room);
        }
        console.log(number);
    });

    socket.on("join-room", (room, cb) => {
        socket.join(room);
        cb(`Join room ${room}`);
    });
});

instrument(io, { auth: false });
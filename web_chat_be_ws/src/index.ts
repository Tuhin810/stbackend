import express, { Express } from "express";
import cors from "cors";
import { json } from "body-parser";
import http from "http";
import { Server, Socket } from "socket.io";
import { MessageInterface } from "./@types/MessageInterface";
import mongoose from "mongoose";


const app: Express = express();
const allowedOrigins = [
    "http://localhost:5173"
];

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: allowedOrigins,
        methods: ["GET", "POST"],
    },
});


const rooms = new Map<string, Set<Socket>>();

io.on('connection', (socket: Socket) => {
    console.log(rooms);
    socket.on('join', (room: string) => {
        if (!rooms.has(room)) {
            rooms.set(room, new Set());
        }
        rooms.get(room)?.add(socket);
        socket.join(room);
    });

    socket.on('message', (room: string, message: MessageInterface) => {
        io.to(room).emit('message', message);
    });

    socket.on('disconnect', () => {
        rooms.forEach((sockets, room) => {
            if (sockets.has(socket)) {
                sockets.delete(socket);
                if (sockets.size === 0) {
                    rooms.delete(room);
                }
            }
        });
    });
});

const port = 8585;

mongoose
  .connect("mongodb+srv://tuhinnew123:YT3qD4DEK0YAB7a8@cluster0.pny6k0z.mongodb.net/starmark?retryWrites=true&w=majority")
  .then(() => console.log("  Database connected 📟 "))
  .catch((err) => console.log(err))

app.use(cors());
app.use(json());

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
import express, { Express } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { json } from "body-parser";
import http from "http";
import { Server, Socket } from "socket.io";
import { MessageInterface } from "./@types/interfaces/MessageInterface";
import { authenticationRouter } from "./router/auth/auth.routes";
import { ApplicantRouter } from "./router/applicant/applicant.routes";
import { RecruiterRouter } from "./router/recruiter/recruiter.routes";
import { companyRouter } from "./router/company/company.routes";
import { jobRouter } from "./router/jobs/jobs.routes";
import { messageRouter } from "./router/message/message.routes";

dotenv.config();
const app: Express = express();
const server = http.createServer(app);
const port = process.env.PORT || 8989;
const socketPort = process.env.SOCKET_PORT || 9999;
export const accountSid = process.env.TWILIO_ACCOUNT_SID;
export const authToken = process.env.TWILIO_AUTH_TOKEN;
const mongo_url = (process.env.NODE_ENV !== "PROD") ? process.env.LOCAL_MONGO_URL : process.env.PROD_MONGO_URL

const options: cors.CorsOptions = {
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false
};

const io = new Server(server, {
  cors: options
});

app.use(cors(options));
app.use(json());
app.use([ApplicantRouter, RecruiterRouter, companyRouter, jobRouter, messageRouter, authenticationRouter]);

const rooms = new Map<string, Set<Socket>>();

io.on("connection", (socket: Socket) => {
  console.log(rooms);
  socket.on("join", (room: string) => {
    if (!rooms.has(room)) {
      rooms.set(room, new Set());
    }
    rooms.get(room)?.add(socket);
    socket.join(room);
  });

  socket.on("message", (room: string, message: MessageInterface) => {
    io.to(room).emit("message", message);
  });

  socket.on("disconnect", () => {
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

const dbName = "starmark";

if (mongo_url) {
  try {
    mongoose
      .connect(mongo_url, { dbName })
      .then(() => console.log("Database connected "))
      .catch((err) => console.log(err))
  } catch (err) {
    console.log(err);
  }
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

server.listen(socketPort, () => {
  console.log(`Web Socket server is running at http://localhost:${socketPort}`);
});
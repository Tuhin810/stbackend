import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { json } from "body-parser";
import http from "http";
import { Server, Socket } from "socket.io";
import { MessageInterface } from "./@types/interfaces/MessageInterface";
import recruiterModel from "./model/recruiter/RecruiterSchema";
import PlanModel from "./model/subscription_plans_list/subscription_plans_list_Schema";
import SubscriptionHistoryModel from "./model/PlanHistory/PlanHistory";
import { stripePayment } from "./service/stripe/stripe_server";
import { sendTextMessage } from "./service/sendMessage/SendMessage";

dotenv.config();
const app = express();
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
app.use("", require("./router/routes.index"));

const rooms = new Map<string, Set<Socket>>();

//stripe checkout
app.post("/api/create-checkout-session", stripePayment);
app.get("/", (req, res) => {
  sendTextMessage()
  res.send(
    `<h1>sent succesfully</h1>`
  )
});


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
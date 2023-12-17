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

// checkout api
const stripe = require('stripe')('sk_test_51ONCPxSCyxdPDARLxZDH1IIxXw79a1snd1rrptJ44tUpgHtdoOxtnlrvuyoGQlJbUr2kS184hvIMZqDwN5YNTp7100ERJdX1vt');


app.post("/api/create-checkout-session", async (req, res) => {
  try {
    // Assuming the products are sent in the request body
    const { recruiterId, subscriptionPlanId } = req.body;

    const products = Array.isArray(req.body.products) ? req.body.products : [];

    if (!products.every((product: any) => typeof product === 'object')) {
      console.error("Invalid product data received.");
      return res.status(400).send("Bad Request");
    }

    const lineItems = products.map((product: { plan_name: any; price: number; }) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: product.plan_name,
        },
        unit_amount: Math.round(product.price * 100),
      },
      quantity: 1,
    }));

    if (lineItems.length === 0) {
      console.error("No line items provided.");
      return res.status(400).send("Bad Request");
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/employer/success",
      cancel_url: "http://localhost:5173/employer/cancel",
    });
    try {

      const recruiter = await recruiterModel.findById(recruiterId);
      const subscriptionPlan = await PlanModel.findById(subscriptionPlanId);

      if (!recruiter || !subscriptionPlan) {
        return res.status(404).json({ message: "Recruiter or Subscription Plan not found 👍" });
      }
      recruiter.subscription = true;
      recruiter.activated = true;
      recruiter.job_limit += subscriptionPlan.job_limit
      recruiter.subscription_plan_object_id = subscriptionPlan._id;
      recruiter.current_Plan = subscriptionPlan.plan_name
      await recruiter.save();

      //finction to record subscription history
      const subscriptionHistory = new SubscriptionHistoryModel({
        recruiterId: new mongoose.Types.ObjectId(recruiterId),
        planName: subscriptionPlan.plan_name,
        planPrice: subscriptionPlan.price,
      });

      // Save the subscription history to the database
      await subscriptionHistory.save();
      res.status(200).json({ id: session.id, message: "Subscription activated successfully 🥳", data: recruiter });
    } catch (error) {
      console.error("Error activating subscription: 😭", error);
      res.status(500).json({ message: "Internal server error 😭" });
    }

  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
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
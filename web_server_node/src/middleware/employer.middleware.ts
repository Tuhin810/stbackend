import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ROLES } from "../constants/Roles";
import recruiterModel from "../model/recruiter/RecruiterSchema";

export const employerAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // console.log("authorization", req.headers);
    if (!req.headers.authorization) {
      return res.status(401).json({
        message: "Access denied. No token provided"
      });
    }

    const token = req.headers.authorization.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        message: "Access denied. No token provided"
      });
    }

    if (!process.env.JWT_KEY) {
      return res.status(400).json({
        message: "Token not found"
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_KEY) as Record<string, unknown>;

    if (!(decoded.role === ROLES.employer)) {
      return res.status(401).json({
        message: "Access denied. Invalid Token!",
        token: req.header("token")
      });
    }

    req.body.user = decoded; // setting a property of the request object with decoded string. It will be used to be validated against the valid user or member details

    // so userData or memberData contains _id, user_name, SSN and date_of_birth packed in JWT created in member login route.
    if (req.body.user.role === ROLES.employer) {
      const { _id } = req.body.user;
      const data = await recruiterModel.findById(_id);
      if (data) {
        next();
      }
      else {
        return res.status(401).json({
          message: "Access denied !!",
        });
      }
    }
  } catch (error) {
    console.log("error", error);
    return res.status(400).json({
      message: "Invalid Token!",
      error: error,
      token: req.header("token")
    });
  }
};

export default employerAuth;

var jwt = require('jsonwebtoken');

import { Request, Response } from "express";


//job seeker 
export const authenticateApplicant = async (req: any, res: Response, next: any) => {

  try {
    const decode = jwt.verify(
      req.headers.authorization,
      process.env.JWTKEY
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }

}

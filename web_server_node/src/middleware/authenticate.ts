import { verify } from "jsonwebtoken";

import { Request, Response } from "express";


//job seeker 
export const authenticateApplicant = async (req: any, res: Response, next: any) => {

  if (req.headers.authorization != undefined) {
    try {
      const decode = verify(
        req.headers.authorization,
        process.env.JWTKEY as string
      );
      req.user = decode;
      next();
    } catch (error) {
    }
  }

}

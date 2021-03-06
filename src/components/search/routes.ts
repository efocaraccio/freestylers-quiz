import { Request, Response } from "express";
import { checkSearchParam } from "../../middleware/checks";

/* 
This is an example of a how a Service should be done. 

Create a new one according to your bussines inside services

and then add the service to the exports in services/index.ts
*/


// Simple array of endpoints, they'll be added when executing server.ts
export default [
  {
    path: "/",
    method: "get",
    handler: [
        checkSearchParam, //Example of how to add general validations
        async (req: Request, res: Response) => {
        res.send("Hello world!");
      }
    ]
  }
];
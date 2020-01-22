import { Request, Response, NextFunction } from "express";
import { countryList } from "../country/routes"
import { HTTP400Error } from "../../utils/httpErrors";
import {  checkCountryParam } from "../../middleware/checks";
import { getQuestions } from "./service"




export default [
  {
    path: "/questions",
    method: "get",
    handler: [
        checkCountryParam,
        (req: Request, res: Response) => {
            let country = req.query.country;
            
            if(!countryList.includes(country))
                throw new HTTP400Error("Country not found");
            
            let data = getQuestions(country);

            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(data, null, 2));
            
        }
    ]
  }
];




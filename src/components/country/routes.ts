import { Request, Response } from "express";

//Repalce with couchbase or postgre
let countries = { countries:[
    {
        name: "Argentina",
        flag: "img/arg.png"
    },
    {
        name: "España",
        flag: "img/esp.png"
    },
    {
        name: "Chile",
        flag: "img/chl.png"
    },
    {
        name: "México",
        flag: "img/mex.png"
    }]};

export const countryList = [ "argentina", "chile", "espana", "mexico" ]

export default [
  {
    path: "/countries",
    method: "get",
    handler: [
        async (req: Request, res: Response) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(countries, null, 2));
      }
    ]
  }
];
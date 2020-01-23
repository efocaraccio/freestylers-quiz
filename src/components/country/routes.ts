import { Request, Response } from "express";

//Repalce with couchbase or postgre
let countries = { countries:[
    {
        name: "Argentina",
        flag: "argflag.png"
    },
    {
        name: "España",
        flag: "espflag.svg"
    },
    {
        name: "Chile",
        flag: "chlflag.svg"
    },
    {
        name: "México",
        flag: "mexflag.png"
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
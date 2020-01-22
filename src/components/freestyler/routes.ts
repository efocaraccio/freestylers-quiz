import { Request, Response, NextFunction } from "express";
import { countryList } from "../country/routes"
import { HTTP400Error } from "../../utils/httpErrors";
import {  checkCountryParam } from "../../middleware/checks";


const arg = {
    pais: "Argentina",
    freestylers: [
        {
            name: "Wos",
            img: "img/wos.png"
        },
        {
            name: "Papo",
            img: "img/papo.png"
        },
        {
            name: "Trueno",
            img: "img/trueno.png"
        },
        {
            name: "Cacha",
            img: "img/cacha.png"
        }
    ]
};

const esp = {
    pais: "España",
    freestylers: [
        {
            name: "Chuty",
            img: "img/chuty.png"
        },
        {
            name: "Skone",
            img: "img/skone.png"
        },
        {
            name: "Blon",
            img: "img/blon.png"
        },
        {
            name: "Force",
            img: "img/force.png"
        }
    ]
};

const chl = {
    pais: "Chile",
    freestylers: [
        "Teorema",
        "Kaiser",
        "Nitro",
    ]
};

const mex = {
    pais: "México",
    freestylers: [
        "Aczino",
        "RC",
        "Dominic"
    ]
};

export default [
  {
    path: "/freestylers",
    method: "get",
    handler: [
        checkCountryParam,
        (req: Request, res: Response) => {
            let country = req.query.country;
            if(countryList.includes(country)){
                let countryIndex = countryList.indexOf(country);
                let data;
                if(countryIndex == 0)
                    data = arg;
                if(countryIndex == 1)
                    data = chl;
                if(countryIndex == 2)  /* Harcoded until database integration */
                    data = esp;
                if(countryIndex == 3)
                    data = mex;
                
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(data, null, 2));
            }      
            else  throw new HTTP400Error("Country not found");
        }
    ]
  }
];
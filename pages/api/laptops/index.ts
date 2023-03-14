import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req:NextApiRequest,res:NextApiResponse){
    const laptops = require('@/pages/api/laptops/laptop.json')
    if (req.method==="GET"){
        res.status(200).json(laptops);
    }
}

import  { Request, Response } from "express";
import { Product } from "../models/Product";


export const home = (req: Request, res: Response) => {
  let trabalho = "sim";

  let user = {
    name: "luis",
    age: "18",
  };

let list = Product.getAll()
let expensiveList = Product.getPriceAfter(12)

  let frase = ["alguma coisa", "tente algo", "estude"];
  res.render("pages/home", { user, trabalho, list, frase, expensives:expensiveList });
};

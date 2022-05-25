import { Request, Response } from "express";

export const user = (req: Request, res: Response) => {
  console.log("query string", req.query);

  let nome: string = req.query.nome as string;
  let idade: string = req.query.idade as string;

  res.render("pages/nome", {
    nome,
    idade,
  });
};

export const idadeForm = (req: Request, res: Response) => {
  res.render("pages/idade");
};

export const idadeResultado = (req: Request, res: Response) => {
  let mostrarIdade: boolean = false;
  let idade: number = 0;

  if (req.body.ano) {
    let anoNascimento: number = parseInt(req.body.ano as string);
    let anoAtual: number = new Date().getUTCFullYear();
    idade = anoAtual - anoNascimento;
    mostrarIdade = true;
  }
  res.render("pages/idade", {
    idade,
    mostrarIdade,
  });
};

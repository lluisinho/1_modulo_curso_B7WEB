// UTILIZAR NPM INSTALL EXPRESS BAIXAR O PACOTE EXPRESS
import express, { Request, Response } from "express"; // IMPORTANTO O EXPRESS
import path from "path";
import mainRoutes from "./routes/index";
import mustache from "mustache-express";
import  dotenv from "dotenv"

dotenv.config()

const server = express();

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());
server.use(express.static(path.join(__dirname, "../public")));

//fazer com que o corpo de requisição fique acessivel na rota 
server.use(express.urlencoded({extended: true})) 


server.use(mainRoutes);

server.use((req: Request, res: Response) => {
  res.status(404).send("Página não encontrada");
});

// PORTA DO LOCALHOST
server.listen(process.env.PORT);

console.log("o server foi iniciado 🚀");

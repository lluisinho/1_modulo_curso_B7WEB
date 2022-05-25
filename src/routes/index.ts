import { Router, Request, Response, query } from "express";
import { home } from "../controllers/homeController";
import { contato } from "../controllers/infoController";
import { sobre } from "../controllers/infoController";
import { user } from "../controllers/userController";
import { idadeForm } from "../controllers/userController";
import { idadeResultado } from "../controllers/userController";

const router = Router();

router.get("/", home);
router.get("/contato", contato);
router.get("/sobre", sobre);
router.get("/nome", user);
router.get("/idade", idadeForm),
router.post("/idade-resultado", idadeResultado);

export default router;

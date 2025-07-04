import { Router } from "express";
import * as obraCtrl from "../controllers/obras.controller";

const router = Router();
router.post("/", obraCtrl.create);
router.get("/", obraCtrl.listAll);
router.get("/:id", obraCtrl.getOne);
router.put("/:id", obraCtrl.update);
router.delete("/:id", obraCtrl.remove);

export default router;

import express from "express";
import AlunoController from "../controllers/aluno.controller.js"

const router = express.Router();

router.post("/", AlunoController.createUsuario);
router.get("/", AlunoController.getAlunos);
router.get("/:id", AlunoController.getAluno);
router.delete("/:id", AlunoController.deleteAluno);
router.put("/", AlunoController.updateAluno);

export default router
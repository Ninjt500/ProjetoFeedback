import Pessoas from 'express';
import { pessoasController } from '../controllers/pessoasController';
const pessoasRouter = Pessoas.Router();

pessoasRouter.get("/pessoas", pessoasController.GetPessoas);

pessoasRouter.get("/pessoas/:id", pessoasController.GetPessoa);

pessoasRouter.post("/pessoas", pessoasController.PostPessoa);

pessoasRouter.patch("/pessoas/:id", pessoasController.PatchPessoa);

pessoasRouter.delete("/pessoas/:id", pessoasController.DeletePessoa);

pessoasRouter.delete("/pessoas", pessoasController.DeletePessoas);

export const PessoasRouter = pessoasRouter;
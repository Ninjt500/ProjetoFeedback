import setor from 'express';
import { setoresController } from '../controllers/setoresController';
const setoresRouter = setor.Router();

setoresRouter.get("/setores", setoresController.GetSetores);

setoresRouter.get("/setores/:id", setoresController.GetSetor);

setoresRouter.post("/setores", setoresController.PostSetor);

setoresRouter.patch("/setores/:id", setoresController.PatchSetor);

setoresRouter.delete("/setores/:id", setoresController.DeleteSetor);

setoresRouter.delete("/setores", setoresController.DeleteSetores);

export const SetoresRouter = setoresRouter;
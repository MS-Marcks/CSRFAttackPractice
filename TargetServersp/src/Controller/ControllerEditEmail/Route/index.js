import { Router } from 'express'
import Controller from '../Controller'


const router = Router();

router.get("/", Controller.ViewEditEmail)
router.post("/", Controller.EditEmail)

export default router;

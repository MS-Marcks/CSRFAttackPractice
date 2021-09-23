import { Router } from 'express'
import Controller from '../Controller'

const router = Router();

router.get("/", Controller.ViewLogin)
router.post("/", Controller.login)

export default router;

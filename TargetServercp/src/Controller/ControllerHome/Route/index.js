import { Router } from 'express'
import Controller from '../Controller'

const router = Router();

router.get("/", Controller.ViewHome)

export default router;
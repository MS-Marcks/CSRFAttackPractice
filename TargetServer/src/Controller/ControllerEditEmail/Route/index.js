import { Router } from 'express'
import Controller from '../Controller'

import csrf from "../../../middleware/csrf"
const router = Router();

router.get("/", Controller.ViewEditEmail)
router.post("/", csrf.csrf, Controller.EditEmail)

export default router;

'use strict';
import { Router } from 'express'
import ControllerHome from '../Controller/ControllerHome/Route'
import ControllerLogin from '../Controller/ControllerLogin/Route';
import ControllerEditEmail from '../Controller/ControllerEditEmail/Route';
import ControllerLogout from '../Controller/ControllerLogout/Route';

import Login from "../middleware/login";

var route = Router();


route.use('/login', ControllerLogin)
route.use('/', ControllerLogin)
route.use('/home', Login, ControllerHome)
route.use('/edit', Login, ControllerEditEmail)
route.use('/logout', Login, ControllerLogout)

export default route;

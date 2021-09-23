'use strict';
import users from "../../../db";
import csrf from "../../../middleware/csrf";

class ControllerHome {
    static async ViewEditEmail(req, res) {
        res.render('edit', { token: csrf.csrfToken(req.sessionID) });
    }
    static async EditEmail(req, res) {
        const user = users.find(user => user.id = req.session.userId);
        user.email = req.body.email;
        res.send("correo cambiado");
    }

}
export default ControllerHome;
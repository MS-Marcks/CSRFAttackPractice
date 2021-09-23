'use strict';
import users from "../../../db";


class ControllerHome {
    static async ViewEditEmail(req, res) {
        res.render('edit');
    }
    static async EditEmail(req, res) {
        const user = users.find(user => user.id = req.session.userId);
        user.email = req.body.email;
        res.send("correo cambiado");
    }

}
export default ControllerHome;
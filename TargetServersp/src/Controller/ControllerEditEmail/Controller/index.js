'use strict';
import users from "../../../db";


class ControllerHome {
    static async ViewEditEmail(req, res) {
        res.render('edit');
    }
    static async EditEmail(req, res) {
        try {
            const user = users.find(user => user.id = req.session.userId);
            user.email = req.body.email;
            res.render("home", { message: "se ha cambiado exitosamente el correo" });
        } catch (error) {
            res.render("home", { message: "no se ha cambiado exitosamente el correo" });
        }
    }

}
export default ControllerHome;
'use strict';
import users from "../../../db";

class ControllerLogin {
    static async ViewLogin(req, res) {
        res.render("login")
    }
    static async login(req, res) {
        if (!req.body.email || !req.body.password) {
            res.render("login", { message: "rellene todos campos del formulario" })
            return;
        }
        const user = users.find(user => user.email === req.body.email);
        if (!user || user.password !== req.body.password) {
            res.render("login", { message: "Credenciales invalidas" });
            return;
        }
        req.session.userId = user.id;
        res.redirect("/home");
    }

}
export default ControllerLogin;


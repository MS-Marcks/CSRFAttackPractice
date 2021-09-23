'use strict';
import users from "../../../db";
import csrf from "../../../middleware/csrf";

class ControllerLogin {
    static async ViewLogin(req, res) {
        res.render("login")
    }
    static async login(req, res) {
        if (!req.body.email || !req.body.password) {
            return res.status(400).send("rellene todos campos del formulario");
        }
        const user = users.find(user => user.email === req.body.email);
        if (!user || user.password !== req.body.password) {
            return res.status(400).send("Credenciales invalidas");
        }
        req.session.userId = user.id;
        csrf.tokens.set(req.sessionID, new Set())
        res.redirect("/home");
    }

}
export default ControllerLogin;


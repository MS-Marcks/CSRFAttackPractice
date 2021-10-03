'use strict';

class ControllerLogout {
    static async logOut(req, res) {
        req.session.destroy();
        res.redirect("login");
    }
}
export default ControllerLogout;
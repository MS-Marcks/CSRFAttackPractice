'use strict';



class ControllerLogout {
    static async logOut(req, res) {
        req.session.destroy();
        res.send("Cerro sesion");
    }
}
export default ControllerLogout;
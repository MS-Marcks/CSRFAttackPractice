'use strict';

class ControllerHome {
    static async ViewHome(req, res) {
        res.render("home");
    }

}
export default ControllerHome;
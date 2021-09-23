const login = (req, res, next) => {
    if (!req.session.userId) {
        return res.redirect("/login");
    }
    next();
}


export default login;
import { v4 as uuid } from 'uuid';

let tokens = new Map();

const csrf = {}
csrf.csrfToken = (sessionId) => {
    const token = uuid();
    const userTokens = tokens.get(sessionId);
    userTokens.add(token);
    setTimeout(() => userTokens.delete(token), 30000);

    return token;
}


csrf.csrf = (req, res, next) => {
    const token = req.body.csrf;
    if (!token || !tokens.get(req.sessionID).has(token)) {
        res.status(422).send('CSRF Token missing or expired');
    } else {
        next();
    }
}


export default csrf;
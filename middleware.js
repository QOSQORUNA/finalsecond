var jwt = require('jwt-simple');
var secret = '$2y$12$RM3QIuN.9P/KUb4fugZPru0cZ3Sn14r9ajUzWFPzyBGtOxPGjsiE2'; // esto deberíamos guardarlo en un .env pero me fale ferga

module.exports = function authMiddleware(req, res, next) {

    console.log(req.headers.authorization);
    var token = req.headers.authorization || null;

    if (!token) return res.status(401).json({
        message: 'Acción no autorizada'
    });

    if (token) {
        token = token.split(' ')[1];
    }

    // ya ta

    try {
        jwt.decode(token, secret);
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({
            message: 'Acción no autorizada'
        });
    }
}
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['access-token'];

    if (!token) {
        return res.status(403).send('¡El token es requerido para realizar esta petición!');
    }

    try {
        const decoded = jwt.verify(token, 'signal');
        req.user = decoded;

        if(decoded.is_admin) {
            return next();
        } else {
            return res.status(403).send('¡No tienes suficientes permisos para acceder aquí!');
        }

    } catch (errors) {
        return res.status(401).send('¡Token incorrecto!');
    }
}

module.exports = verifyToken;
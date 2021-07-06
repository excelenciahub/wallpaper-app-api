const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {

    const authorizationHeader = req.headers.authorization;

    if (authorizationHeader) {
        const token = req.headers.authorization.split(' ')[1]; // Bearer <token>

        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).send({
                    message: "Unauthorized!"
                });
            }
            req.userId = decoded.id;
            next();
        });

    } else {
        result = {
            error: `Authentication error. Token required.`,
            status: 401
        };
        res.status(401).send(result);
    }


};
require("dotenv").config()

const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const white_list = ["/", "/register", "/login",]
    console.log(">>> ", req.originalUrl)
    if (white_list.find(item => "/v1/api" + item === req.originalUrl)) {
        next();
    } else {
        if (req.headers && req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1];

            //verify
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET)
                req.user = {
                    email: decoded.email,
                    name: decoded.name,
                    role: decoded.role,
                    createdBy: "hoidanit"
                }
                console.log(">>> decoded: ", decoded)
                next();
            } catch (error) {
                return res.status(401).json({
                    message: "token bi het han hoac khong hop le"
                })
            }

        } else {
            return res.status(401).json({
                message: "ban chua chuyen access token o header / token bi het han"
            })
        }
    }




}

module.exports = auth;
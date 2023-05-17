const db = require("../models");
const bcrypt = require("bcrypt");

const encryptPassword = async function encryptPassword(req, res, next) {
    try {
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        req.body.password = hash;
        next();
    } catch (err) { res.json(err.massage) }
}

const authenticate = async function authenticate_user(req, res, next) {

    try {
        const password = req.body.password;
        const data = [req.body.email, req.body.password];
        const [rows, _] = await db.sequelize(" SELECT email,password FROM users  WHERE email = ?", [req.body.email])
        res.rows = rows;
        const isSamePassword = await bcrypt.compare(password, rows.password);
        next();
    } catch (err) { res.json(err.massage) }
}

module.exports = {
    authenticate,
    encryptPassword,
}
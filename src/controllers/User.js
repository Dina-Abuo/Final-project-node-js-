const db = require('../models')
const bcrypt = require("bcrypt");
module.exports = {
    renderSignup: async (req, res) => {
        res.render('registration', { layout: false })
    },
    signup: async (req, res) => {
        const user = await db.users.create(req.body);
        res.redirect('/user/profile');
    },
    renderLogin: async (req, res) => {
        res.render('login', { layout: false })
    },
    login: async (req, res) => {
        res.redirect('/')
    },
    renderProfile: async (req, res) => {
        // const [model] = await db.sequelize.query(`SELECT * FROM users`);
        const user = await db.users.findByPk(req.params.id)
        res.render('profile', { layout: false, user })

    }

}
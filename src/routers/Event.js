const controller = require("../controllers/admin/Event");
const router = require("express").Router();
const { check } = require('express-validator');

router.get('/details/:id', controller.details);

router.route('/create')
    .get(controller.renderCreatePage)
    .post(
        // [check('title', ' this title must me 5+ charchterslong').exists().isLength({ min: 5 }),
        // check('email','Email is not valid ')
        // .isEmail()
        // .normalizeEmail(),] ,


        //  createEvent  مكانهم في صفحه ال

        //       < !-- <% if (typeof alert != 'undefined') {%>
        // <% alert.forEach(error => {%>
        //   <div class="alert alert-warning alert-dismissible fade show" role="alert">
        //     <%= error.msg %>
        //       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        //   </div>
        //   <%}); %>
        //     <% }%> -->
        
        controller.create)

router.route('/edit/:id?')
    .get(controller.renderEditPage)
    .post(controller.update)

router.post('/delete/:id', controller.delete);

router.get('/:pnum?', controller.index);

module.exports = router;
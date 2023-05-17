const controller = require("../controllers/Home");
const router = require("express").Router();

router.get('/home-event/event/:id', controller.page);
router.get('/', controller.index);
router.get('/home-events', controller.events);
router.get('/home-speakers', controller.speakers);



module.exports = router;
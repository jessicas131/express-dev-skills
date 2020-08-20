const express = require('express');
const skillsCtrl= require('../controllers/skills');
const router = express.Router();

/* GET users listing. */

//GET /skills
router.get('/', skillsCtrl.index);
//GET /todos/new
router.get('/new', skillsCtrl.new);
//GET /todos/<some id>
router.get('/:id', skillsCtrl.show);
//POST /skills
router.post('/', skillsCtrl.create);
//DELeTE /skills/:id
router.delete('/:id', skillsCtrl.delete);



module.exports = router;

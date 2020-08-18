const GaStudent = require('../models/skill');
//GaStudent now equals modules.exports

function index(req, res) {
  res.render('skills/index', {
    cohort: GaStudent.students
  })
}

function show(req, res) {
  res.render('skills/show', {
    expertise: GaStudent.getSkill(req.params.language),
    expert: req.params.language
  });
}

module.exports = {
  index,
  show
}
const students = [
  {student: 'jessica', skills: 'javascript', id: 70933},
  {student: 'rashel', skills: 'css', id: 40233},
  {student: 'junyi', skills: 'mvc', id: 70534},
  {student: 'colin', skills: 'html', id: 70632}
];

function getSkill(language) {
  return students.find(function(obj) {
    return obj.skills === language; 
  }).student
}

module.exports = {
  students,
  getSkill
}


const skills = [
  { id: 123456, skill: 'javascript', learned: 'true'},
  { id: 789101, skill: 'css', learned: false},
  { id: 445666, skill: 'mvc', learned: false},
  { id: 323111, skill: 'html', learned: false}
];

// function getSkill(skillset) {
//   return skills.find(function(obj) {
//     return obj.skills === skillset; 
//   }).skill
// }

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
}

function deleteOne(skillId) {
  // Find the index of the todo object
  // based upon its id
  const idx = skills.findIndex(skill => skill.id === parseInt(skillId));
  skills.splice(idx, 1);
}

function create(skill) {
  // Add the id
  skill.id = Date.now() % 10000000;
  skill.done = false;
  skills.push(skill);
}
function getOne(id) {
  // Use the Array.prototype.find iterator method
  return skills.find(skill => skill.id === parseInt(id));
}

function getAll() {
  return skills;
}
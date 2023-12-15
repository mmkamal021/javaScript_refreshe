var student = 60;

const schoolName = "maniknagar"; // Isn't possiable redeclearable and reassignable

const maniknagarSchool = {
  classRoom: 20,
  washRoom: 15,
};

maniknagarSchool.classRoom = 22; // Value update possiable
console.log(maniknagarSchool);

function tryScope() {
  var student = 65; // This is functional Scope
  console.log(student);

  if (student === 65) {
    let teacher = 15;
    teacher = 20; // Reassignable
    console.log(teacher); // This is block Scope
    console.log("Calling Global Scope");
  } else {
    console.log("Calling Functional Scope");
  }
}

console.log(student); // This is Global scope

tryScope();

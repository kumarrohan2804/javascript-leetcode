var countStudents = function (students, sandwiches) {
  while (sandwiches.length > 0 && students.includes(sandwiches[0])) {
    if (students[0] == sandwiches[0]) {
      sandwiches.splice(0, 1);
      students.splice(0, 1);
    } else {
      let temp = students.splice(0, 1);
      students.push(temp[0]);
    }
  }
  console.log(students.length);
};

let students = [1, 1, 1, 0, 0, 1],
  sandwiches = [1, 0, 0, 0, 1, 1];
countStudents(students, sandwiches);

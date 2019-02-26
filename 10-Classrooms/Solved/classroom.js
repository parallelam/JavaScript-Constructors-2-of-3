// requiring our Student module exported from student.js
const Student = require("./student.js");

// constructor function for creating classroom objects
const Classroom = function(profName, roomNum) {
  // this.students will hold all of our student objects
  this.students = [];
  this.profName = profName;
  this.roomNum = roomNum;
  // a method that creates a student using our Student constructor.
  // It then pushes the new student object to this.students and updates this.numStudents
  this.addStudent = (name, favoriteSub, gpa) => {
    this.students.push(new Student(name, favoriteSub, gpa));
  };
 
};

// exporting our Classroom constructor. We will require it in main.js
module.exports = Classroom;

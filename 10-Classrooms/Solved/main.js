// requiring our Classroom module exported from classroom.js
const Classroom = require("./Classroom.js");

// creating and storing a new classroom object
const firstClass = new Classroom("Alper", 3187);

// calling the addStudent method on our firstClass object
firstClass.addStudent("Julie", "Firebase", 3.87);
firstClass.addStudent("Wes", "Ajax & APIs", 3.87);
firstClass.addStudent("Jamil", "Node.js", 3.87);

firstClass.studentCount();

console.log(firstClass);

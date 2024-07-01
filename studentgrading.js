// studentgrade.js
const prompt = require("prompt-sync")({sigint: true});
const mark= prompt("Enter the mark of the student: ");

function studentMark(mark) {
// check if mark is between 0 and 100
    if (mark > 79 && mark <= 100) {
      return "A";
    } else if (mark >= 60 && mark <= 79) {
      return "B";
    } else if (mark >= 50 && mark <= 59) {
      return "C";
    } else if (mark >= 40 && mark <= 49) {
      return "D";
    } else if (mark >= 0 && mark <= 39) {
      return "E";
    } else {
      return "Invalid input: Mark should be between 0 and 100";// Invalid input
    }
  }

  console.log(studentMark
    (mark)
  )
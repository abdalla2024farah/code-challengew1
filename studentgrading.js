const r1 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });


// averasge grade of students
function calculateGrade(marks) {
        if (marks > 100 || marks < 0){
            return 'invalid'
        }
        if (marks > 79) {
            return 'A';
        } else if (marks >= 60 && marks <=79) {
            return 'B';
        } else if (marks >= 50 && marks <=59) {
            return 'C';
        } else if (marks >= 40 && marks <=49) {
            return 'D';
        } else {
            return 'E';
        }
    }

    r1.question("Enter student marks: ", function (input) {
        const mark = Number(input);
      
        if (isNaN(mark) || mark > 100 || mark < 0) {
          console.log("The marks you entered is not correct");
        } else {
          let grade = awardGrades(mark);
          console.log("The grade is " + grade);
        }
      
        r1.close();
      });
      
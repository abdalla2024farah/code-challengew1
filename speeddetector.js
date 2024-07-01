// speeddetector.js
const prompt = require("prompt-sync")({sigint: true});

const speed = prompt("Enter the speed of the car: ");
const speedLimit = 70;
// console.log(speedDetector(speed));
 function speedDetector() {
    if (speed <= speedLimit) {
        return "Ok";
    } else {
        const points = (speed - speedLimit) / 5;
        if (points<=12) {
            return points
        }
        else if (points > 12) {
            return "License suspended";
        }
    
    }
}
// console.log(speedDetector(speed));
console.log(speedDetector(speed));
                

        
    
    
    
    
    
        
    
 
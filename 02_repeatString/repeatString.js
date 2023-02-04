let greeting = '';

const repeatString = function(string, num) {
    
    if (num < 0 ) {
        return 'ERROR'
    } else {
        for (let i = 0; i < num; i++) {
            greeting += string;
        }
        return greeting;

    }
    
    
    };

// Do not edit below this line
module.exports = repeatString;

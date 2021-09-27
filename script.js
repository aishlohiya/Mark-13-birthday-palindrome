function reverseString(date) {
    var listCharacters = date.split("");
    var reverseListCharacters = listCharacters.reverse();
    var stringReversed = reverseListCharacters.join("");
    return stringReversed; 
}

function checkPalindrome(date) {
    var reverseStringCheck = reverseString(date);
   if (date === reverseStringCheck) {
       return true; 
   } else {
       return false;
   }
}

function convertNumber(date) {
    var dateString = {
        day: "",
        month: "",
        year: ""
    }

    if (date.day<10) {
        dateString.day = "0" + date.day;
    } else {
        dateString.day = date.day.toString();
    }

    if (date.month<10) {
        dateString.month = "0" + date.month;
    } else {
        dateString.month = date.month.toString();
    }

    dateString.year = date.year.toString();
    return dateString;

}

function convertDate(date) {
    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var ddmmyy = date.day + date.month + date.year.slice(-2);
    var mmddyy = date.month + date.day + date.year.slice(-2);
    var yyddmm = date.year.slice(-2) + date.day + date.month;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
}

function checkAllPalindromes(date) {
    var listAllPalindromes = convertDate(date);
    var checkValue = [];

    for(var i=0; i<listAllPalindromes.length; i++) {
    var result = checkPalindrome(listAllPalindromes[i]); checkValue.push(result); 
    } return checkValue;
}

function leapYear(year) {
    if (year%400 === 0)
    return true;

    if (year%100 === 0)
    return false;

    if (year%4 === 0)
    return true;

    return false;
}

function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

    if (month===2) {
        if(leapYear(year)) {
            if (day>29) {
                day = 1;
                month = 3;
            }
        } else {
            if(day>28) {
                day = 1;
                month = 3;
            }
        }
    }
    else {
        if(day> daysInMonth[month-1]) {
            day = 1;
            month++;
        }
    }   
    if (month>12) {
        month = 1;
        year++;
    } 
    return {
        day: day,
        month: month,
        year: year
    }
}

function palindromeDateCheck(date) {
    var nextDate = getNextDate(date);
    var counter = 0;

    while (1) {
        counter++;
        var dateString = convertNumber(nextDate);
        var resultValue = checkAllPalindromes(dateString);

        for (var i=0; i<resultValue.length; i++) {
            if (resultValue[i]) {
                return [counter, nextDate];
            }
        }
        nextDate = getNextDate(nextDate);
    }
}


var realValue = {
    day: 5,
    month: 1,
    year: 2020
}


console.log(palindromeDateCheck(realValue));

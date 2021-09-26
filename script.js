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


var realValue = {
    day: 29,
    month: 11,
    year: 1992
}

var dateString = convertNumber(realValue);

console.log(checkAllPalindromes(dateString));

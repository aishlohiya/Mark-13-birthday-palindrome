function reverseString(data) {
    var listCharacters = data.split("");
    var reverseListCharacters = listCharacters.reverse();
    var stringReversed = reverseListCharacters.join("");
    return stringReversed; 
}

function checkPalindrome(data) {
    var reverseStringCheck = reverseString(data);
   if (data === reverseStringCheck) {
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

var data = {
    day: 5,
    month: 4,
    year: 2021
}

var inputText = "racecar";

console.log(convertNumber(data));
console.log(checkPalindrome(inputText));
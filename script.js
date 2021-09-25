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

console.log(checkPalindrome("racecar"));
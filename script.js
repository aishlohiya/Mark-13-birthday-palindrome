function reverseString() {
    var data = "hello";
    var listCharacters = data.split("");
    var reverseListCharacters = listCharacters.reverse();
    var stringReversed = reverseListCharacters.join("");
    return stringReversed; 
}

console.log(reverseString("data"));


// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1,num2){
      if(num1 > num2) {
        return num1;
      }
      else 
        return num2;
}
max(7,3);

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1,num2,num3){
    return Math.max(num1,num2,num3);
}
maxOfThree(7,11,4);
// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    if (char === 'a') {
      return true;
    } 
    else if (char === 'e'){
        return true;
    } 
    else if (char === 'i') {
        return true;
    } 
    else if (char === 'o') {
        return true;
    } 
    else if (char === 'u') {
        return true;
    } 
    else 
    return false;
}
isVowel('a');
// isVowel('e');
// isVowel('i');
// isVowel('o');
// isVowel('u');
// isVowel('z');
// if (char === 'a' || 'e' || 'i' || 'o' || 'u') 
// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
// Tim I found this on the net. I did not create it but I am using it for learning purposes only
//  function rovarspraket(phrase) {
//   var string = phrase.toLowerCase();
//   var vowels = ["a", "e", "i", "o", "u", " "];
//   var y = "";

//   for (i = 0; i < string.length; i++) {
//      var current = string.charAt(i); 
//     if (vowels.indexOf(current) != -1)
//     y = (y + (current));
//    else 
//     y = (y + (current + "o" + current));
//   }
//   return y;
// }
// rovarspraket('this is fun');

// // ---------------------
// // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// // ---------------------

function reverse(string){
    return string.split('').reverse().join('');
}
reverse('The dog');
// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
// Tim I found this on the net. I did not create it but I am using it for learning purposes only

// function findLongestWord(array) {
//   var words = array.length;
//   var count = 0;
//   for (i = 0; i < words; i++) {
//     if (array[i].length > count) 
//       count = array[i].length;
//   }
//   return count;
// }
// findLongestWord(['to','three','one']);



// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------
// Tim I found this on the net. I did not create it but I am using it for learning purposes only

//     function filterLongWords(words, i) {
//   var length = words.length;
//   var longestWords = [];
//   for (i = 0; i < length; i++) {
//     if (words[i].length > i) {
//       longestWords[longestWords.length] = words[i];
//     }
//   }
//   return longestWords;
// }
// filterLongWords(['five', 'six', 'eight', 'ten', 'eleven'],4);

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------
// Tim I found this on the net. I did not create it but I am using it for learning purposes only

// function charFreq(string){
//   var list = {}; //create an empty object
//   var length = string.length; 
//   // console.log(length); 
//   for (var i = 0; i < length; i++) {  
//   if (string.charAt(i) in list) 
//     list[string.charAt(i)] += +1;
//   else 
//     list[string.charAt(i)] = 1;
//   } //end of for loop

//   return list;
// } //end of function
// charFreq("abaaaabaaabbb");




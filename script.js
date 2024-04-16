//Decision Making

//Leap Year Checker

function leapYear (number){
    if (number % 4 === 0) {
        return true;
    } else if (number % 4 === 0 && number % 100 === 0) {
        return false;
    } else if (number % 4 === 0 && number % 100 === 0 && number % 400 === 0){
        return true;
    } else {
        return false
    }
}
    

//Ticket Pricing

function priceCheck (number){
    if (number <= 12){
      return "$10"
   } else if (number > 12 && number < 18) {
          return "$15"
      } else if (number >= 18){
          return "$20"
      } else {
          return "Not a number"
      }
  }



// Recursion

//Palindrome Checker

function isPalindrome(str) {
    if (str.length === 1){
        return true
    } else if (str.length === 2){
        return str[0] === str[1]
    } else if (str[0] === str.slice(-1)){
        return isPalindrome(str.slice(1, -1))
    } else {
        return false
    }
} 


//Power Function
function myPowerFunction(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    const result = 
        base * myPowerFunction(base, exponent - 1);
    return result;
}
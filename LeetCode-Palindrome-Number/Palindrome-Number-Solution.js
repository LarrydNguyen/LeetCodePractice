/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    // num, negs included, symbols included
    // return boolen if it is a palindrome
    
    // find the reverse
    // to reverse a string -> .split('').reverse.join('')
    // num to a string -> toString()
    // from string to number again -> parseInt()

    // let rev = parseInt(x.toString().split('').reverse().join(''))
    
    // // conditional
    // // if the current num === reverseNum -> true
    
    // if(x === rev){
    //     return true
    // // if the current num != reverseNum -> false
    // }else{
    //     return false
    // }

    
    //faster method
    // using == as just to check if both sides are equal reguardless of their type
    return x == x.toString().split('').reverse().join('')
    
};


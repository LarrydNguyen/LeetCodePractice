// Check if the Sentence Is Pangram
// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// Input: sentence = "leetcode"
// Output: false
 

// Constraints:

// 1 <= sentence.length <= 1000
// sentence consists of lowercase English letters.

/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
    // a string, no special characters
    
    // boolean 
    
    // "thequickbrownfoxjumpsoverthelazydog" -> true
    // 'hi, my name is larry' -> false
    
    // create a varaible that holds all the letters in the alphabet
    // compare the sentence with that variable 
    let str = sentence.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    //loop through the alphabet array, if a certain character is not found in str, the loop will end and the function will return false
    for(let i = 0; i < alphabet.length; i++){
        if(str.indexOf(alphabet[i]) < 0){
            return false
        }
    }
    
    return true
    
};
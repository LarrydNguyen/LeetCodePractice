// 58. Length of Last Word
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.


// var lengthOfLastWord = function(s) {
//     // string 
//     // number that is the length of the last word in the string
    
//     // "fly me to the moon" --> 4
//     // "Hello World" --> 5
    
//     // trim the string to get rid of white space, 
        //split the string with the space 
        //pop() the last word of the string returning the length
    
//     return s.split(' ').pop().length
    
    
// };

// trim the string to get rid of white space, 
//split the string with the space 
//pop() the last word of the string returning the length

const lengthOfLastWord = s => s.trim().split(' ').pop().length
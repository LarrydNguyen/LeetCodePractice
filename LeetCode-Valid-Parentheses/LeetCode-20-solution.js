// 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */


    // string, no letters, only symbols 
    // boolean, true/false if string is valid 
    
    // ")" -> false
    // "(" -> false
    // "(]" -> false
    // "([)]" -> false
    // "()[]{}" -> true 
    // "([]){}" -> true 

// time complexity = 0(N) (linear)
// space complexity = 0(N) (linear)

var isValid = function(s) {
    const hashMap = { "(" : ")", "{": "}", "[": "]" }
    const stack = []
    
    for ( let ch of s){
        if(hashMap[ch]){
            //ch is an opening bracket
            stack.push(hashMap[ch])
        } else if ( stack.length > 0 && stack[stack.length - 1 ] === ch){
            // ch is a closing bracket and top of stack matches 
            stack.pop()
        }else {
            // ch is a closing bracket and top of the stack doesnt match
            return false
        }
    }
    return stack.length === 0
};
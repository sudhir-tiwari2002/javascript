// an anagram of a string is another string that contains the same charecters, only the order of the charecter is different

// var firstword ="Army";
// var Secondword = "Mary";

// console.log(isAnagram(firstword,Secondword));

// function isAnagram(first,second)
// {
//     var a = first.toLowerCase()
//     var b= second.toLowerCase()

//     a=a.split("").sort().join("");
//     b= b.split("").sort().join("");

//     return a===b
// }

var firstword ="Army";
var Secondword = "Mary";

var a = firstword.toLowerCase()
var b= Secondword.toLowerCase() 

a=a.split("").sort().join("");
b= b.split("").sort().join("");

console.log(a,"value of a") 
console.log(b,"value of b") 

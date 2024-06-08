//Question 10
// Misbah Nayab, 29 March 2024
// This program uses return keyword to return the function of sum.
function mySum() {
    var a = 4;
    var b = 6;
    var c = 2;
    var sum = a + b;
    var multiply = c * a;
    return sum;
}
console.log(mySum());
//Question 11
var names = ["Laraib", "Laiba", "Muniba", "Ayesha"];
// console.log(names[0])
// console.log(names[1])
// console.log(names[2])
// //Question 12
// console.log(`Hello ${names[0]}, I would love to meet you next week`)
// console.log(`Hello ${names[1]}, Are you interested to learn Python?`)
// console.log(`Hello ${names[2]}, When will you visit Karachi?`)
for (var i = 1; i < names.length; i++) {
    console.log(names[i]);
}

//Question 13
var transports = ["Car", "Bus", "Motorcycle", "Bicycle"];
transports.forEach(function (transports) {
    console.log("I would like to own ".concat(transports));
});
//Question 14
var guests = ["Afifa", "Muniba", "Mahira"];
// guests.forEach(guests =>{
//     console.log(`Dear ${guests}, I would like to invite you on Dinner today.`)
// })
//Question 15
guests[1] = "Warda";
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", I would like to invite you on Dinner today"));
});

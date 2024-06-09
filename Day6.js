var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Question 16
var guests = ["Afifa", "Muniba", "Mahira"];
;
guests.unshift("Abdul Samad", "Fatima");
guests.push("Warda", "Hafsa");
guests.splice(1, 0, "Taleeq", "Babar", "Tayyaba", "Faliha");
console.log(guests);
//Question 17
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("".concat(removedGuest, ", I am sorry I can't invite you to dinner "));
}
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", you are still invited to Dinner"));
});
//Question 18
var places = ["Multan", "Jehlum", "Sialkot", "Lahore"];
console.log("Orginal array:", places);
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
console.log("Orginal array:", places);
console.log("Reverse Alphabetical Order:", __spreadArray([], places, true).sort().reverse());
console.log("Orginal array:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Reversed Order:", places);
places.sort();
console.log("Alphabetical Order:", places);
places.reverse();
console.log("Reversed Order:", places);

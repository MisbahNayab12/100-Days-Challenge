//Question 16
let guests: string[] = ["Afifa", "Muniba", "Mahira"];;
guests.unshift("Abdul Samad", "Fatima");
guests.push("Warda", "Hafsa");
guests.splice(1, 0, "Taleeq", "Babar", "Tayyaba", "Faliha")
console.log(guests)


//Question 17
while(guests.length>2){
    let removedGuest = guests.pop()
    console.log(`${removedGuest}, I am sorry I can't invite you to dinner `)
}
guests.forEach(guests=>{
    console.log(`Dear ${guests}, you are still invited to Dinner`)
})


//Question 18
let places:string[] = ["Multan", "Jehlum", "Sialkot", "Lahore"]

console.log("Orginal array:", places)

console.log("Alphabetical order:", [...places].sort())

console.log("Orginal array:", places)

console.log("Reverse Alphabetical Order:", [...places].sort().reverse())

console.log("Orginal array:", places)

places.reverse()
console.log("Reversed order:", places)

places.reverse()
console.log("Reversed Order:", places)

places.sort()
console.log("Alphabetical Order:", places)

places.reverse()
console.log("Reversed Order:", places)





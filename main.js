const distanceEl = document.querySelector(".distance")
const ageEl = document.querySelector(".age")
//console.log(distanceEl, ageEl);

const userDistance = Number(prompt("Type here how many km"))
const userAge = Number(prompt("Type your age"))
const price = userDistance*0.21

if (userAge < 18) {
    console.log(price - 0.2*price);
} else if (userAge >= 65) {
    console.log(price - 0.4*price);
} else {
    console.log(price);
}
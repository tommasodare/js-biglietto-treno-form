const formEl = document.getElementById("form")
const distanceEl = document.querySelector(".distance")
const ageEl = document.querySelector(".age")
const buttonEl = document.querySelector("button")
//console.log(distanceEl, ageEl);

/* const userDistance = Number(prompt("Type here how many km"))
const userAge = Number(prompt("Type your age"))
const price = userDistance*0.21

function finalPrice() {
    if (userAge < 18) {
        console.log(price - 0.2*price);
    } else if (userAge >= 65) {
        console.log(price - 0.4*price);
    } else {
        console.log(price);
    }
}

finalPrice() */

// inserisco l'EventListener all'interno del form
formEl.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log(distanceEl.value);
    console.log(ageEl.value);
})

const price = Number(0.21*distanceEl.value)
console.log(price);

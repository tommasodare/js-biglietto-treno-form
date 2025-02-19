const formEl = document.getElementById("form")
const nameEl = document.getElementById("username")
const distanceEl = document.getElementById("km")
const ageEl = document.getElementById("age")
const buttonEl = document.querySelector("button")

const cardName = document.querySelector(".name")
const cardPrice = document.querySelector(".price")

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
    //console.log(distanceEl.value);
    //console.log(ageEl.value);
})

buttonEl.addEventListener("click", function(){
    //console.log(distanceEl.value, ageEl.value);
    const price = Number(0.21*distanceEl.value)
    //console.log(price);

    cardName.innerHTML = nameEl.value
    //cardPrice.innerHTML = price.toFixed(2)

    if (ageEl.value < 18) {
       cardPrice.innerHTML = (price - 0.2*price).toFixed(2)
    } else if (ageEl.value >= 65) {
        cardPrice.innerHTML = (price - 0.4*price).toFixed(2)
    } else {
        cardPrice.innerHTML = (price).toFixed(2)
    }
})



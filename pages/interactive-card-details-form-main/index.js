const button = document.getElementById("confirm")
button.addEventListener("click", Card)

let card_number = document.getElementById("card_number")

let number_input = document.getElementById("number")

let teste = {part1: "0000", part2: "0000", part3: "0000", part4: "0000"}

let teste2 = {part1: "0000"}

console.log("Antes: " + teste2.part1)

console.log(teste.part1)

card_number.innerHTML = `${teste.part1} ${teste.part2} ${teste.part3} ${teste.part4}`

number_input.addEventListener("input", input_number)

function input_number()
{   
    console.log("mudei!")
    teste2.replace(teste2.part1[0], (number_input).value) //= (number_input).value
}


/*
const inputHandler = function(e) {
    card_number.innerText = e.target.value;
  }
number_input.addEventListener("input", inputHandler)
*/

function Card()
{
    console.log("Depois: " + teste2.part1)
}
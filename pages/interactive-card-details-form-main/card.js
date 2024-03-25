const button = document.getElementById("confirm")
button.addEventListener("click", Card)

let card_number = document.getElementById("card_number")

let number_input = document.getElementById("number")
number_input.value = ""


let lenght = ((number_input).value).length

let card_numbers = "0000000000000000" // 0000 0000 0000 0000
let card_split = card_numbers.split("")
console.log(card_split)


number_input.addEventListener("input", input_number)

function input_number()
{
    //Remove white space on array
    card_split = card_split.filter(function(str) {
        return /\S/.test(str);
    });

    let last_lenght = ((number_input).value).length

    if (lenght > last_lenght)
    {
        console.log("diminuiu!")
        lenght--
        card_split[lenght] = "0"
    }
    else
    {    
        console.log("aumentou!")
        lenght++
    }

    let new_lenght = lenght
    let last_number = (number_input).value % 10
    let last_string = last_number.toString()
    console.log("lenght antigo é " + last_lenght)
    console.log("lenght atual é " + new_lenght)
    
    if (lenght > 16)
    {
        console.log("limite máximo!")
        lenght = 16
    }
    else
    {
        card_split[lenght - 1] = last_string
    }
    
    console.log(card_split)

    card_number.innerHTML = ""
    for(let i = 0; i < 19; i++)
    {
        if (i == 4 || i == 9 || i == 14)
        {
            card_split.splice(i, 0, " ")
        }
        card_number.innerHTML += card_split[i]
    }
}

function Card()
{
    console.log("Apertou!")
}
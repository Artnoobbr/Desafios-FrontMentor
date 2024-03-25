const button = document.getElementById("confirm")
button.addEventListener("click", Card)

let card_number = document.getElementById("card_number")

let number_input = document.getElementById("number")
let number_list = []
number_input.value = ""

let lenght = ((number_input).value).length

let card_numbers = "0000000000000000" // 0000 0000 0000 0000
let last_numbers_list = []
let card_split = card_numbers.split("")
console.log(card_split)


number_input.addEventListener("input", input_number)

function input_number()
{
    //Remove white space on array
    card_split = card_split.filter(function(str) {
        return /\S/.test(str);
    });

    let text = (number_input).value
    let text_split = text.split("")
    let text_split_last = text_split[text_split.length - 1]
    console.log(text_split)
    console.log("text split last number: " + text_split_last)
    
    if (text_split_last == undefined)
    {
        text_split_last = "0"
    }

    var spaces = (text.split(" ").length - 1);
    console.log("tem essa quantidade de espaços: " + spaces)
    console.log("lenght antes de atualizar " + lenght)
    let last_lenght = ((number_input).value).length //problema aqui -eu de 12:55


    if (text_split_last == ' ')
    {
        console.log("Espaço no ultimo")
        last_lenght = lenght
    }
    else if (lenght > last_lenght)
    {
        console.log("diminuiu!")
        lenght--
        card_split[lenght] = "0"
    }
    else if (lenght < last_lenght)
    {    
        console.log("aumentou!")
        lenght++
    }


    let last_number = text_split_last//(number_input).value % 10
    let last_string = last_number.toString()
    console.log("lenght antigo é " + last_lenght) 
    console.log("lenght atual é " + lenght)
    
    if (lenght > 16)
    {
        console.log("limite máximo!")
        lenght = 16
    }
    else
    {
        if (text_split_last == ' ')
        {
            console.log("ESPAÇO! não fazer nada!")
            lenght--
        }
        else
        {
            card_split[lenght - 1] = last_string
        }
        
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
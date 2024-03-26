const button = document.getElementById("confirm")
button.addEventListener("click", Card)

//Card Text
let card_number = document.getElementById("card_number")
let card_month = document.getElementById("date_month")
let card_year = document.getElementById("date_year")

//Card Input
let number_input = document.getElementById("number")
let month_input = document.getElementById("month")
let year_input = document.getElementById("year")

//Month
month_input.value = ""
let length_month_old = ((month_input).value).length
let month_numbers = "00"
let month_split = month_numbers.split("")
console.log(month_split)

//year
year_input.value = ""

//Number
number_input.value = ""
let lenght = ((number_input).value).length
let card_numbers = "0000000000000000" // 0000 0000 0000 0000
let last_numbers_list = []
let card_split = card_numbers.split("")
//console.log(card_split)

//Events
number_input.addEventListener("input", input_number)
month_input.addEventListener("input", input_month)
year_input.addEventListener("input", input_year)


//Do not remove the console.logs!
function input_number()
{
    //Remove white space on array
    card_split = card_split.filter(function(str) {
        return /\S/.test(str);
    });

    let text = (number_input).value
    let text_split = text.split("")
    let text_split_last = text_split[text_split.length - 1]
    //console.log(text_split)
    //console.log("text split last number: " + text_split_last)
    
    if (text_split_last == undefined)
    {
        text_split_last = "0"
    }

    var spaces = (text.split(" ").length - 1);
    //console.log("tem essa quantidade de espaços: " + spaces)
    //console.log("lenght antes de atualizar " + lenght)
    let last_lenght = ((number_input).value).length - spaces //problema aqui -eu de 12:55


    if (text_split_last == ' ')
    {
        //console.log("Espaço no ultimo")
        lenght++
    }
    else if (lenght > last_lenght)
    {
        //console.log("diminuiu!")
        lenght -= 1
        card_split[lenght] = "0"
    }
    else if (lenght < last_lenght)
    {    
        //console.log("aumentou!")
        lenght += 1
    }


    let last_number = text_split_last//(number_input).value % 10
    let last_string = last_number.toString()
    //console.log("lenght antigo é " + last_lenght) 
    //console.log("lenght atual é " + lenght)
    
    if (lenght > 16)
    {
        //console.log("limite máximo!")
        lenght = 16
    }
    else if (text_split.length == 0)
    {
        //console.log("Split zerado! colocado zeros!")
        lenght = 0
        for(let x = 0; x < 16; x++)
        {
            card_split[x] = "0"
        }
    }
    else
    {
        if (text_split_last == ' ')
        {
            //console.log("ESPAÇO! não fazer nada!")
            lenght--
        }
        else
        {
            card_split[lenght - 1] = last_string
        }
        
    }
    
    //console.log(card_split)
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


function input_month()
{
    console.log("lenght month old é " + length_month_old)
    lenght_month_new = ((month_input).value).length
    text_month = (month_input).value
    text_month_split = text_month.split("")
    console.log(text_month_split)
    console.log("lenght month new é " + lenght_month_new)

    text_month_last = text_month_split[(text_month_split).length - 1]
    console.log("text month last number é " + text_month_last)

    if(lenght_month_new > length_month_old)
    {
        console.log("Adicionado! Month")
        length_month_old++
    }
    else if (length_month_old > lenght_month_new)
    {
        console.log("Removido! Month")
        length_month_old--
        //Colocar algo aqui
    }
    console.log("lenght month old atualizado é " + length_month_old)

    if (lenght_month_new > 2)
    {
        console.log("Passou do limite! fazer nada!")
    }
    else
    {
        month_split[lenght_month_new - 1] = text_month_last
    }
    console.log(month_split)

    for(let y = 0; y <= 2; y++)
    {
        card_month.innerHTML = month_split[y]
    }

}

function input_year()
{
    alert("Working! year")
}


function Card()
{
    console.log("Apertou!")
}
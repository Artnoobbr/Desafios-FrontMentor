// Card Text
let card_name = document.getElementById("card_name")
let card_number = document.getElementById("card_number")
let card_month = document.getElementById("date_month")
let card_year = document.getElementById("date_year")
let card_cvc = document.getElementById("card_cvc")

// Other elements
let input_area = document.getElementById("input_area")
let thanks = document.getElementById("thanks")

let confirm_button = document.getElementById("confirm")
let continue_button = document.getElementById("continue")



input_area.style.display = "flex"
thanks.style.display = "none"

confirm_button.addEventListener("click", Confirm)
continue_button.addEventListener("click", Continue)


// Card Input
let name_input = document.getElementById("name")
let number_input = document.getElementById("number")
let month_input = document.getElementById("month")
let year_input = document.getElementById("year")
let cvc_input = document.getElementById("cvc")

// Name
name_input.value = ""
let lenght_name_old = ((name_input).value).length
let card_names = "Jane Appleseed"
let names_split = card_names.split("")

// Number
number_input.value = ""
let lenght = ((number_input).value).length
let card_numbers = "0000000000000000" // 0000 0000 0000 0000
let card_split = card_numbers.split("")

// Month
month_input.value = ""
let length_month_old = ((month_input).value).length
let month_numbers = "00"
let month_split = month_numbers.split("")
//console.log(month_split)

// Year
year_input.value = ""
let length_year_old = ((year_input).value).length
let year_numbers = "00"
let year_split = year_numbers.split("")

// CVC
cvc_input.value = ""
let lenght_cvc_old = ((cvc_input).value).length
let cvc_numbers = "000"
let cvc_split = cvc_numbers.split("")


//console.log(card_split)

//Events
name_input.addEventListener("input", input_name)
number_input.addEventListener("input", input_number)
month_input.addEventListener("input", input_month)
year_input.addEventListener("input", input_year)
cvc_input.addEventListener("input", input_cvc)

//Ideia de criar uma função unica para o month,year e cvc

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

function character(lenght_old, input, input_split, card_input, type, maxlenght)
{
    console.log("lenght month old é " + lenght_old)
    let lenght_new = ((input).value).length
    let lenght_input_split = (input_split).length
    let text_input = (input).value
    let text_input_split = text_input.split("")
    console.log(text_input_split)
    console.log("lenght month new é " + lenght_new)

    let text_input_last = text_input_split[(text_input_split).length - 1]
    console.log("text month last number é " + text_input_last)

    if(lenght_new > lenght_old)
    {
        console.log("Adicionado! Month")
        lenght_old++
    }
    else if (lenght_old > lenght_new)
    {
        console.log("Removido! Month")
        lenght_old--
        if (type == "number")
        {
            input_split[lenght_old] = "0"
        }
        else
        {
            input_split[lenght_old] = ""
        }
    }
    console.log("lenghtold atualizado é " + lenght_old)


    if (lenght_new == 0)
    {
        lenght_old = 0
        if(type == "number")
        {
            for(let x = 0; x < 2; x++)
            {
                input_split[x] = "0"
            }
        }
        else
        {
            console.log("Zerado!")
            card_input.innerHTML = "Jane Appleseed"
        }

    }
    
    if (text_input_last == " ")
    {
        if(type == "number")
        {
            console.log("Espaço! fazer nada!")
        }
        else
        {
            input_split[lenght_new - 1] = " "
        }
    }
    else
    {
        card_input.innerHTML = ""
        input_split[lenght_new - 1] = text_input_last
    }

    console.log("lenght input split é  " + lenght_input_split)

    if (type == "number")
    {
        for(let y = 0; y < maxlenght; y++)
        {
            card_input.innerHTML += input_split[y]
        }
    }
    else
    {
        for(let y = 0; y < text_input_split.length; y++)
        {
            card_input.innerHTML += input_split[y]
        }
    }

    if(type != "number" && text_input_last == undefined && lenght_new == 0)
    {
        card_input.innerHTML = "Jane Appleseed"
    }

    console.log(type)
    return lenght_old
}

function input_month()
{
    //character(length_month_old, month_input, month_split, card_month)
    length_month_old = character(length_month_old, month_input, month_split, card_month, "number", 2)
    console.log(month_split)
}

function input_year()
{
    length_year_old = character(length_year_old, year_input, year_split, card_year, "number", 2)
}

function input_cvc()
{
    lenght_cvc_old = character(lenght_cvc_old, cvc_input, cvc_split, card_cvc, "number", 3)
}

function input_name()
{
    lenght_name_old = character(lenght_name_old, name_input, names_split, card_name)
}

/*
function input_name()
{
    console.log("lenght name old é " + lenght_name_old)
    let lenght_name_new = ((name_input).value).length
    let text_name = (name_input).value
    let text_name_split = text_name.split("")
    console.log(text_name_split)

    let text_name_last = text_name_split[text_name_split.length - 1]
    console.log("last text name " + text_name_last)

    if(lenght_name_new > lenght_name_old)
    {
        console.log("Adicionado! Nome")
        lenght_name_old++
    }
    else if (lenght_name_old > lenght_name_new)
    {
        console.log("Removido! Year")
        lenght_name_old--
        names_split[lenght_name_old] = ""
    }

    console.log("lenght name old atualizado é " + lenght_name_old)
    

    if (lenght_name_new == 0)
    {
        card_name.innerHTML = "Jane Appleseed"
    }
    else
    {
        card_name.innerHTML = ""
        names_split[lenght_name_new - 1] = text_name_last
    }

    for(let y = 0; y < lenght_name_new; y++)
    {
        card_name.innerHTML += names_split[y]
    } 
}
*/


function Confirm()
{
    input_area.style.display = "none"
    thanks.style.display = "flex"
}

function Continue()
{
    location.reload()
}


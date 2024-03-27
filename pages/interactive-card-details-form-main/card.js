const button = document.getElementById("confirm")
button.addEventListener("click", Card)

// Card Text
let card_name = document.getElementById("card_name")
let card_number = document.getElementById("card_number")
let card_month = document.getElementById("date_month")
let card_year = document.getElementById("date_year")
let card_cvc = document.getElementById("card_cvc")

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


function input_month()
{   
    //Ideia poderia criar uma function que fazia essa funcção ao inves de
    //So copiar e colar o mesmo codigo, mas com coisas diferentes

    console.log("lenght month old é " + length_month_old)
    let lenght_month_new = ((month_input).value).length
    let text_month = (month_input).value
    let text_month_split = text_month.split("")
    console.log(text_month_split)
    console.log("lenght month new é " + lenght_month_new)

    let text_month_last = text_month_split[(text_month_split).length - 1]
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
        month_split[length_month_old] = "0"
        //Colocar algo aqui
    }
    console.log("lenght month old atualizado é " + length_month_old)


    if (text_month_last == " ")
    {
        console.log("Espaço! fazer nada!")
    }
    else if (lenght_month_new == 0)
    {
        lenght_month_new = 0
        for(let x = 0; x < 2; x++)
        {
            month_split[x] = "0"
        }
    }
    else
    {
        month_split[lenght_month_new - 1] = text_month_last
    }

    card_month.innerHTML = ""
    for(let y = 0; y < 2; y++)
    {
        console.log("y é " + y)
        card_month.innerHTML += month_split[y]
    }

}

function input_year()
{
    console.log("lenght month old é " + length_month_old)
    
    let lenght_year_new = ((year_input).value).length
    let text_year = (year_input).value
    let text_year_split = text_year.split("")
    console.log(text_year_split)
    console.log("lenght year new é " + lenght_year_new)

    let text_year_last = text_year_split[(text_year_split).length - 1]
    console.log("text year last number é " + text_year_last)

    

    if(lenght_year_new > length_year_old)
    {
        console.log("Adicionado! Year")
        length_year_old++
    }
    else if (length_year_old > lenght_year_new)
    {
        console.log("Removido! Year")
        length_year_old--
        year_split[length_year_old] = "0"
        //Colocar algo aqui
    }
    console.log("lenght month old atualizado é " + length_year_old)


    if (text_year_last == " ")
    {
        console.log("Espaço! fazer nada!")
    }
    else if (lenght_year_new == 0)
    {
        lenght_year_new = 0
        for(let x = 0; x < 2; x++)
        {
            year_split[x] = "0"
        }
    }
    else
    {
        year_split[lenght_year_new - 1] = text_year_last
    }

    card_year.innerHTML = ""
    for(let y = 0; y < 2; y++)
    {
        console.log("y é " + y)
        card_year.innerHTML += year_split[y]
    }
}

function input_cvc()
{
    console.log("lenght month old é " + lenght_cvc_old)
    let lenght_cvc_new = ((cvc_input).value).length
    let text_cvc = (cvc_input).value
    let text_cvc_split = text_cvc.split("")
    console.log(text_cvc_split)
    console.log("lenght year new é " + lenght_cvc_new)

    let text_cvc_last = text_cvc_split[(text_cvc_split).length - 1]
    console.log("text year last number é " + text_cvc_last)

    

    if(lenght_cvc_new > lenght_cvc_old)
    {
        console.log("Adicionado! Year")
        lenght_cvc_old++
    }
    else if (lenght_cvc_old > lenght_cvc_new)
    {
        console.log("Removido! Year")
        lenght_cvc_old--
        cvc_split[lenght_cvc_old] = "0"
    }
    console.log("lenght cvc old atualizado é " + lenght_cvc_old)


    if (text_cvc_last == " ")
    {
        console.log("Espaço! fazer nada!")
    }
    else if (lenght_cvc_new == 0)
    {
        lenght_cvc_new = 0
        for(let x = 0; x < 3; x++)
        {
            cvc_split[x] = "0"
        }
    }
    else
    {
        cvc_split[lenght_cvc_new - 1] = text_cvc_last
    }

    card_cvc.innerHTML = ""
    for(let y = 0; y < 3; y++)
    {
        console.log("y é " + y)
        card_cvc.innerHTML += cvc_split[y]
    } 
}

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


function Card()
{
    console.log("Apertou!")
}
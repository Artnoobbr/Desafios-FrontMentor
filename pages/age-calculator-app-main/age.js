let submit = document.getElementById("image_button")

submit.addEventListener("click", calcular)

function calcular() {
    let r = document.querySelector(':root');
    let rs = getComputedStyle(r)
    let error_color = rs.getPropertyValue("--error_color")

    let date = new Date()
    let dia_atual = date.getDate()
    let mes_atual = date.getMonth() + 1
    let ano_atual = date.getFullYear()

    //Input usuario
    
    let dia_input = document.getElementById("dia").value
    let mes_input = document.getElementById("mes").value
    let ano_input = document.getElementById("ano").value

    let res_dia = document.getElementById("res_dia")
    let res_mes = document.getElementById("res_mes")
    let res_ano = document.getElementById("res_ano")

    let error_log = document.getElementById("error")
    error_log.innerHTML = ""
    let error_test = false
    

    let meses = [31,28,31,30,31,30,31,31,30,31,30,31]

    console.log(`Data atual: ${dia_atual}, ${mes_atual}, ${ano_atual}`)
    console.log(`Dia input: ${dia_input}, ${mes_input}, ${ano_input}`)

    console.log(dia_input.length)

    if (( ano_input % 4 == 0 && ano_input % 100 != 0 ) || (ano_input % 400 == 0) ) { 
        console.log("Ano input é bissexto!");
        meses[1]++ 
    } else {
        console.log("Ano input não é bissexto!");

    }

    // Error Check

    let border_color = rs.getPropertyValue("--border_color")
    let input_color = rs.getPropertyValue("--input_color")


    let dia_error = document.querySelector("#dia_div > .error_text")
    let dia_borda = document.getElementById("dia")
    let dia_txt = document.getElementById("dia_txt")

    let mes_error = document.querySelector("#mes_div > .error_text")
    let mes_borda = document.getElementById("mes")
    let mes_txt = document.getElementById("mes_txt")

    let ano_error = document.querySelector("#ano_div > .error_text")
    let ano_borda = document.getElementById("ano")
    let ano_txt = document.getElementById("ano_txt")

    if (dia_input.length <= 0) {
        dia_borda.style.borderColor = error_color
        dia_txt.style.color = error_color
        dia_error.innerHTML = "This field is required"
        error_test = true
    } else if (dia_input < 1 || dia_input > meses[mes_input - 1]) {
        dia_borda.style.borderColor = error_color
        dia_txt.style.color = error_color
        dia_error.innerHTML = "Must be a valid day"
        error_test = true
    } else if (meses[mes_input - 1] == undefined) {

        if (dia_input > 31) {
            dia_borda.style.borderColor = error_color
            dia_txt.style.color = error_color
            dia_error.innerHTML = "Must be a valid day"
            error_test = true
        } else {
            dia_borda.style.borderColor = border_color
            dia_txt.style.color = input_color
            dia_error.innerHTML = ""
        }
    } else {
        dia_borda.style.borderColor = border_color
        dia_txt.style.color = input_color
        dia_error.innerHTML = ""
    }


    if (mes_input.length <= 0) {
        mes_borda.style.borderColor = error_color
        mes_txt.style.color = error_color
        mes_error.innerHTML = "This field is required"
        error_test = true
    }else if (mes_input < 1 || mes_input > 12) {
        mes_borda.style.borderColor = error_color
        mes_txt.style.color = error_color
        mes_error.innerHTML = "Must be a valid month"
        error_test = true
    } else {
        mes_borda.style.borderColor = border_color
        mes_txt.style.color = input_color
        mes_error.innerHTML = ""
    }

    if (ano_input.length <= 0) {
        ano_borda.style.borderColor = error_color
        ano_txt.style.color = error_color
        ano_error.innerHTML = "This field is required"

        error_test = true
    } else if (ano_atual < ano_input) {
        ano_borda.style.borderColor = error_color
        ano_txt.style.color = error_color
        ano_error.innerHTML = "Must be in the past"


        error_test = true
    } else {
        ano_borda.style.borderColor = border_color
        ano_txt.style.color = input_color
        ano_error.innerHTML = ""
    }

    
    if (error_test == true) {
        return
    }

    //Error Check


    if (( ano_atual % 4 == 0 && ano_atual % 100 != 0 ) || (ano_atual % 400 == 0) ) { 
        console.log("Ano atual é bissexto!");
        meses[1]++ 
    } else {
        console.log("Ano atual não é bissexto!");
    }

    let dia_calc = dia_atual - dia_input
    let mes_calc = mes_atual - mes_input
    let ano_calc = ano_atual - ano_input



    
    console.log(meses[1])

    if (dia_atual < dia_input) {
        console.log("Dia atual é menor que o input")
        mes_calc--
        dia_calc += meses[mes_input - 1]
        console.log(meses[mes_input - 1])
    }
    
    if (mes_atual < mes_input) {
        console.log("Mês atual é menor que o input")
        ano_calc--
        mes_calc+= 12
    } else if (mes_calc < 0) {
        ano_calc--
        mes_calc+= 12
    }

    res_dia.innerHTML = dia_calc
    res_mes.innerHTML = mes_calc
    res_ano.innerHTML = ano_calc
    
}
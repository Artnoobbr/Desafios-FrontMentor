let submit = document.getElementById("submit")
submit.addEventListener("click", rating)

function rating() {
    let ratios = document.getElementsByName("rating")
    let rating_number = 0

    for (let i = 0; i < ratios.length; i++) {
        if (ratios[i].checked == true) {
            rating_number = ratios[i].value
        }
    }
    
    let rating_page = document.getElementById("rating")
    rating_page.style.display = "none"

    let thanks = document.getElementById("thanks")
    thanks.style.display = "flex"

    let thanks_top = document.getElementById("thanks_top")
    let text = document.createElement("h2")

    text.innerHTML = `You selected ${rating_number} out of ${ratios.length  }`
    text.setAttribute("id", "select")

    thanks_top.appendChild(text)

}
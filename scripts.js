const form = document.querySelector(".fale-conosco")
const mascara = document.querySelector(".mascara-formulario")




function cliqueinoBotao() {
    form.style.left = "35%"
    form.style.transform = "translateX (-40%)"
    mascara.style.visibility = "visible"

}

function esconderForm(){
    form.style.left = "-400px"
    form.style.transform = "translateX (0%)"
    mascara.style.visibility = "hidden"


}
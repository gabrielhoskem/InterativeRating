var a1 = document.querySelector("#a");
var a2 = document.querySelector("#b");
var a3 = document.querySelector("#c");
var a4 = document.querySelector("#d");
var a5 = document.querySelector("#e");


var nota1 = () => {
    a1.classList.toggle("selecionado")
    a2.classList.remove("selecionado")
    a3.classList.remove("selecionado")
    a4.classList.remove("selecionado")
    a5.classList.remove("selecionado")
}
a1.addEventListener("click", nota1)


var nota2 = () => {
    a2.classList.toggle("selecionado")
    a1.classList.remove("selecionado")
    a3.classList.remove("selecionado")
    a4.classList.remove("selecionado")
    a5.classList.remove("selecionado")
}
a2.addEventListener("click", nota2)


var nota3 = () => {
    a3.classList.toggle("selecionado")
    a1.classList.remove("selecionado")
    a2.classList.remove("selecionado")
    a4.classList.remove("selecionado")
    a5.classList.remove("selecionado")
}
a3.addEventListener("click", nota3)


var nota4 = () => {
    a4.classList.toggle("selecionado")
    a2.classList.remove("selecionado")
    a3.classList.remove("selecionado")
    a1.classList.remove("selecionado")
    a5.classList.remove("selecionado")
}
a4.addEventListener("click", nota4)


var nota5 = () => {
    a5.classList.toggle("selecionado")
    a2.classList.remove("selecionado")
    a3.classList.remove("selecionado")
    a4.classList.remove("selecionado")
    a1.classList.remove("selecionado")
}
a5.addEventListener("click", nota5)


var enviar = document.querySelector("button")

var send = () => {
    var notaSelecionado = document.querySelector(".selecionado")
    var valorDaNota = notaSelecionado.textContent
    // alert("Obrigado pela sua avaliação: " + valorDaNota)
    document.querySelector(".caixa").setAttribute("id", "votou");
    document.querySelector(".caixa2").removeAttribute("id", "caixa2aparece")
    var novoElemento = document.createElement("p");
    novoElemento.innerHTML = "You selected " + valorDaNota + " out of 5";
    var enfiarRespostaAqui = document.querySelector(".enfiarRespostaAqui");
    enfiarRespostaAqui.appendChild(novoElemento)
    novoElemento.setAttribute("class", "obrigado")
}

enviar.addEventListener("click", send)
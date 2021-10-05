function recebeNumero() {
    var num1 = document.getElementById("num1").value
    var elementoNum = document.getElementById("mostrarNum")

    console.log(num1)
    // elementoNum.innerHTML = num1.toFixed(2)
    if (num1 >= 0) {
        num1 = Math.sqrt(num1)                    
        elementoNum.innerHTML = num1.toFixed(1)
    
    } else {
        elementoNum.innerHTML = "Não existe raiz quadrada de número negativo, tente outro número!"
    }
    
}